# Youth Sports Club (YSC) - Project Instructions

This project is a React-based website for **Youth Sports Club (YSC)**, a sports association based in Lomé, Togo. It serves as an informational platform and an online registration portal for members.

## Project Overview

- **Purpose:** Informational website and registration platform for YSC, showcasing disciplines (Gymnastics, Boxing, Fitness), events, and results.
- **Technologies:**
  - **Framework:** React 18
  - **Routing:** React Router DOM 6
  - **Bundler:** Parcel 2
  - **PDF Generation:** pdf-lib
  - **Deployment:** GitHub Pages (via `gh-pages`)
  - **Styling:** Vanilla CSS (`src/styles.css` and scoped styles in components)
  - **Location:** Stade de Kégué, Lomé, Togo

## Building and Running

### Development
To start the development server:
```bash
npm start
```
This runs `parcel src/index.html`.

### Production Build
To create a production build for GitHub Pages:
```bash
npm run build-gh
```
The output will be in the `dist/` directory, including `404.html` and `CNAME` for the custom domain `youthsportsclubtogo.com`.

### Deployment
To deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

- `src/`: Core source code.
  - `index.js`: Application entry point.
  - `App.jsx`: Main application component and routing.
  - `Home.jsx`: Landing page.
  - `Components/`:
    - `Pages.jsx`: Contains the Join Club (Registration), Events, Training, Results, and Partners pages.
    - `About.jsx`: Information about the club's history and mission.
  - `images/`: Static assets (logos, sport photos, registration PDF template).
  - `styles.css`: Global styles.
- `translations/`: Documentation translations.

## Key Features

- **Online Registration:** Users can fill out a form in `JoinClubPage` which generates a pre-filled PDF (`pdf-lib`) for the user to download and send via WhatsApp/Email.
- **Responsive Design:** Optimized for mobile and desktop.
- **Social Integration:** WhatsApp links for direct contact and registration submission.

## Development Conventions

- **Components:** Functional components with hooks.
- **PDF Generation:** The registration form logic is located in `src/Components/Pages.jsx`. It uses a PDF template located in `src/images/`.
- **Assets:** New images should be added to `src/images/`. Import them using `url:` prefix if needed for Parcel (especially for non-JS assets like PDFs).
