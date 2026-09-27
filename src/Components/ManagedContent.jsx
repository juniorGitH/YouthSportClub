import { useEffect, useState } from "react";
import { api } from "../api";

export const ManagedContent = ({ page, fallbackTitle, fallbackDescription }) => {
  const [content, setContent] = useState({ fields: {}, blocks: [] });
  useEffect(() => {
    api.getContent(page).then((items) => {
      const fields = Object.fromEntries(items.filter((item) => !item.key.startsWith("block:")).map((item) => [item.key, item.value]));
      const blocks = items.filter((item) => item.key.startsWith("block:")).map((item) => ({ key: item.key, ...JSON.parse(item.value) }));
      setContent({ fields, blocks });
    }).catch(() => {});
  }, [page]);

  return (
    <div className="managed-content">
      <h2>{content.fields.title || fallbackTitle}</h2>
      <p>{content.fields.description || fallbackDescription}</p>
      {content.blocks.map((block) => (
        <div className="managed-inline-block" key={block.key}>
          {block.title && <h3>{block.title}</h3>}
          {block.image && <img src={block.image} alt={block.title || "Photo du club"} />}
          {(block.text || "").split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      ))}
    </div>
  );
};
