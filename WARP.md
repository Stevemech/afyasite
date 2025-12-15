# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Structure

This repository contains a React-based website located in the `website/` directory. The project is a single-page landing site for "Afya Quest", an app designed to streamline form filling for non-English speakers.

- **Root Directory**: Contains the `website/` project folder.
- **website/**: The main application code.
    - **src/**: Source code.
        - **components/**: UI components (Hero, Features, Problem, Solution, etc.).
        - **App.jsx**: Main application layout.
        - **main.jsx**: Entry point rendering the React app.
    - **public/**: Static assets.
    - **dist/**: Production build output.

## Development

All development commands should be run from within the `website/` directory.

### Setup
```bash
cd website
npm install
```

### Common Commands
- **Start Development Server**:
  ```bash
  npm run dev
  ```
  Starts the Vite development server with HMR.

- **Build for Production**:
  ```bash
  npm run build
  ```
  Compiles the application to static files in `website/dist/`.

- **Lint Code**:
  ```bash
  npm run lint
  ```
  Runs ESLint on `.js` and `.jsx` files.

- **Preview Build**:
  ```bash
  npm run preview
  ```
  Locally previews the production build.

## Architecture & Technology Stack

- **Framework**: React 19 + Vite.
- **Styling**: Tailwind CSS.
  - Configuration is in `website/tailwind.config.js`.
  - **Brand Colors**: Custom colors are defined in the Tailwind config:
    - `brand-teal` (light, DEFAULT, dark)
    - `brand-gold` (light, DEFAULT, dark)
    - `brand-surface`
- **Animations**: `framer-motion` is used for UI transitions and effects (e.g., `FluidBackground.jsx`).
- **Icons**: `lucide-react`.

### Key Components
The application is composed of distinct sections rendered as components:
- `Hero`: Landing section.
- `Problem` / `Solution`: Core value proposition.
- `Features`: Application capabilities.
- `Walkthrough`: User guide or demo.
- `TechStack`, `Impact`, `Roadmap`, `Team`: Project details.

### Coding Guidelines
- **Components**: Use functional React components with Hooks.
- **Styling**: Use Tailwind utility classes directly in JSX. Avoid standard CSS files except for global resets in `index.css`.
- **File Extensions**: Use `.jsx` for files containing React components.
