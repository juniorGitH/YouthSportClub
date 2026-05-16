# Club Athéon - Project Instructions

This project is a React-based website for **Club Athéon**, a sports association in Paris (16ème arrondissement). It serves as an informational platform for members, potential adherents, and partners.

## Project Overview

- **Purpose:** Informational website for a sports club showcasing activities, registration info, and events.
- **Technologies:**
  - **Framework:** React 18
  - **Routing:** React Router DOM 6
  - **Bundler:** Parcel 2
  - **Deployment:** GitHub Pages (via `gh-pages`)
  - **Styling:** Vanilla CSS (`src/styles.css`)
  - **Linting/Formatting:** ESLint, Prettier

## Building and Running

### Development
To start the development server:
```bash
npm start
```
This runs `parcel src/index.html` and typically opens the app on `http://localhost:1234`.

### Production Build
To create a production build:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Deployment
To deploy to GitHub Pages:
```bash
npm run deploy
```
*Note: This runs the `predeploy` script which builds the project and prepares specific files like `404.html` and `CNAME`.*

## Project Structure

- `src/`: Core source code.
  - `index.js`: Application entry point. Renders `App` into `#app`.
  - `App.jsx`: Main application component, defines the routing structure using `react-router-dom`.
  - `Components/`: Contains all React components (Header, Footer, Home, etc.).
  - `images/`: Static assets like logos and sport-related images.
  - `utils/`: Helper functions (e.g., date formatting, local storage management).
  - `styles.css`: Global styles for the entire application.
- `translations/`: Contains README translations for the template.
- `dist/`: Generated build files (ignored by git).

## Development Conventions

- **Components:** Use functional components with hooks.
- **Routing:** New routes should be added to `src/App.jsx`. Use the `Layout` wrapper for pages requiring a header and footer.
- **Assets:** Place new images in `src/images/` and import them into components.
- **Styling:** Adhere to the styles defined in `src/styles.css`. Prefer adding to this file or creating modular CSS if the project grows significantly.
- **Data:** Authentication logic is intended to be handled by a backend API (as noted in `src/utils/initializeData.js`), though some state is managed via `localStorage`.

## Key Files

- `package.json`: Contains project metadata, dependencies, and scripts.
- `src/App.jsx`: The central hub for navigation and page layout.
- `src/styles.css`: The primary source of truth for the site's visual design.
