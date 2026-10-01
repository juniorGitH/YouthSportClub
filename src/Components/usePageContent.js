import { useEffect, useState } from "react";
import { api, resolveMediaUrl } from "../api";
import { defaultBlocks, emptyBlock } from "./adminContent";

/** Lignes non vides. */
export const linesOf = (text = "") =>
  String(text).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);

/** Paragraphes séparés par une ligne vide. */
export const paragraphsOf = (text = "") =>
  String(text).split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);

/** Lignes au format « libellé | valeur ». */
export const pipeRows = (text = "") =>
  linesOf(text).map((line) => {
    const index = line.indexOf("|");
    if (index < 0) return { label: line, value: "" };
    return { label: line.slice(0, index).trim(), value: line.slice(index + 1).trim() };
  });

const withResolvedMedia = (block = {}) => ({
  ...block,
  image: block.image ? resolveMediaUrl(block.image) : block.image,
  image2: block.image2 ? resolveMediaUrl(block.image2) : block.image2,
});

/** Fusionne les blocs enregistrés avec les valeurs par défaut du site. */
export const mergePageBlocks = (page, items = []) => {
  const defaults = defaultBlocks[page] || {};
  const saved = {};
  items
    .filter((item) => item.key.startsWith("block:"))
    .forEach((item) => {
      try {
        saved[item.key.slice(6)] = withResolvedMedia(JSON.parse(item.value));
      } catch {
        /* ignore malformed blocks */
      }
    });

  const keys = new Set([...Object.keys(defaults), ...Object.keys(saved)]);
  const merged = {};
  keys.forEach((key) => {
    merged[key] = withResolvedMedia({
      ...emptyBlock,
      ...(defaults[key] || {}),
      ...(saved[key] || {}),
    });
  });
  return merged;
};

/**
 * Charge les blocs d'une page administrable.
 * Retourne toujours les contenus par défaut tant que l'API n'a rien enregistré.
 */
export const usePageBlocks = (page) => {
  const [blocks, setBlocks] = useState(() => mergePageBlocks(page, []));

  useEffect(() => {
    let cancelled = false;
    api
      .getContent(page)
      .then((items) => {
        if (!cancelled) setBlocks(mergePageBlocks(page, items));
      })
      .catch(() => {
        if (!cancelled) setBlocks(mergePageBlocks(page, []));
      });
    return () => {
      cancelled = true;
    };
  }, [page]);

  const block = (key) => blocks[key] || emptyBlock;
  return { blocks, block };
};
