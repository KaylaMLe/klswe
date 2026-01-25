# Front end for [klswe.com](https://www.klswe.com)

My personal website is a centralized platform to display my professional portfolio, projects, and expertise, offering a comprehensive view of my skills and interests. With a strong emphasis on user experience, scalability, and maintainability, it provides an engaging way to explore my work and connect with me. I hope you have as much fun exploring the code as I have building it!

## Table of contents

1. [About this repository](#about-this-repository)
2. [Getting started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the project](#running-the-project)
   - [Testing](#testing)
3. [Project design](#project-design)
   - [Architecture](#architecture)
   - [Component design](#component-design)
     - [Contexts](#contexts)
     - [Higher-order components](#higher-order-components)
     - [Page-specific interactive components](#page-specific-interactive-components)
   - [Production dependencies](#production-dependencies)
   - [Development dependencies](#development-dependencies)
     - [Build and development tools](#build-and-development-tools)
     - [TypeScript support](#typescript-support)
     - [Testing libraries](#testing-libraries)
     - [Code quality](#code-quality)
   - [File system](#file-system)
4. [License](#license)

## About this repository

The front end of my personal website is crafted to deliver a responsive, user-friendly interface that brings my portfolio to life through interactive elements and intuitive navigation. It ensures a seamless experience across devices, making it easy for users to explore and engage with my content.

## Getting started

This section provides an overview of the process to run the project, including installation steps and running/testing instructions.

### Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) (version 16 or above recommended)
- npm (included with Node.js)

### Installation

1. Clone the repository.

```
git clone https://github.com/KaylaMLe/klswe.git
cd klswe
```

2. Install the dependencies.

```
npm install
```

### Running the project

To run the application locally:

```
npm run dev
```

This command will start Vite and make the site available at `http://localhost:5173`.

To build the application for production:

```
npm run build
```

This command will create an optimized production build of the project in the `klswe/dist` folder, ready for deployment.

To preview the production build locally:

```
npm run preview
```

This command serves the production build on a local server, allowing you to test the optimized version.

### Testing

To run all tests in the project:

```
npm run test
```

To run tests with a coverage report:

```
npm run test-coverage
```

To run a specific test file, include the `-- path/to/testfile.test.tsx` flag after either of the previous commands. The path can either be absolute or relative to the root folder, `klswe`.

## Project design

### Architecture

The project follows a modern React architecture with:

- **Lazy Loading**: Routes are lazy-loaded using React's `lazy()` function for optimal performance
- **Context Providers**: Context providers wrap the application for state management (page tracking, viewport detection)
- **CSS-in-JS**: Emotion provides type-safe, component-scoped styling
- **Custom Fonts**: Variable fonts are loaded via a dedicated `Fonts` component
- **Environment Configuration**: Vite environment variables for flexible configuration
- **API Integration**: Fetches project data from a backend API to display dynamic content

### Component design

This project is structured with a modular component design, ensuring reusability and responsiveness across different pages. The project uses Emotion CSS-in-JS for styling, providing type-safe and component-scoped styles. Key components are built to handle specific tasks, such as responsive layout adjustments and navigation, while smaller, focused components manage interactive elements like buttons, animations, and dynamic content fetching.

#### Contexts

- `PageNumberContext`: Tracks the current page number, making it easy for components to identify and update the active page. The `CurrentPageProvider` exposes `currentPage` and `setCurrentPage` to child components, enabling them to highlight active pages and apply page-specific styles.
- `ViewPortContext`: Manages a boolean `isMobile` state, which adjusts based on the viewport width ("mobile" defined as <= 600px). The `IsMobileProvider` listens for window resizing events and updates `isMobile` accordingly, allowing components to conditionally render or style content based on the device type.

#### Higher-order components

Higher-order components are designed to wrap other components to add functionality or conditional styling. These components provide a foundation for responsive design and state-based style changes, making it easy to adapt UI elements to window and interaction states.

- `Responsive`: A versatile wrapper component used to apply conditional styling based on screen size, enabling seamless transitions between mobile and desktop layouts.
- `Toggle`: This component is designed to conditionally style elements. Toggle accepts a Component prop (allowing any component to be wrapped) and applies a default style by default, switching to an alternate style when the condition passed in is true. CSS transitions are used to create a smooth effect when the style changes. If the condition is false, the component applies the alternate style on hover and focus for added interactivity.

#### Page-specific interactive components

Lower-level components are designed as containers for primary content and specific user interactions, focusing on delivering unique, immersive experiences. These components are primarily visual and are tailored to the specific needs of each page, not general reusability.

**Pages:**

- **Home**: Main landing area featuring:
  - Gradient background sweeps with stars fading in and out
  - Hero section with name and title displayed in a decorative hexagon
  - "About Me" section with glassmorphism design elements
  - Projects overview carousel that fetches and displays project cards from the backend API

### Production dependencies

The following dependencies are necessary to run the project.

- `@emotion/react` (version ^11.14.0): CSS-in-JS library for styling React components
- `emotion` (version ^11.0.0): Core Emotion library for CSS-in-JS functionality
- `react` (version ^18.2.0): Core React library used to build the interface
- `react-dom` (version ^18.2.0): Used to render React components to the DOM
- `react-router-dom` (version ^6.22.3): Provides routing for navigation between pages
- `typescript` (version ^5.4.2): Adds static typing to JavaScript to help reduce runtime errors

### Development dependencies

The following dependencies are used in the development, testing, and deployment of the project.

#### Build and development tools

- `vite` (version ^5.1.4): Build tool and development server, providing fast iteration and optimized builds
- `@vitejs/plugin-react` (version ^4.2.1): Plugin to integrate React with Vite for making development and production builds

#### TypeScript support

- `@types/ packages*`: Type definitions for TypeScript support, including:
  - `@types/jest` (version ^29.5.12)
  - `@types/js-cookie` (version ^3.0.6)
  - `@types/node` (version ^20.11.25)
  - `@types/react` (version ^18.2.56)
  - `@types/react-dom` (version ^18.2.19)
- `ts-jest` (version ^29.1.2): Allows Jest to run tests written in TypeScript
- `ts-node` (version ^10.9.2): Enables the direct execution of TypeScript in Node.js for tooling and development scripts

#### Testing libraries

- `jest` (version ^29.7.0) and `jest-environment-jsdom` (version ^29.7.0): Testing framework and environment configuration for running unit tests
- `@testing-library/jest-dom` (version ^6.5.0) and `@testing-library/react` (version ^14.3.1): Libraries for testing React components and DOM interactions
- `msw` (version ^2.4.1): Mock Service Worker for simulating API calls during testing

#### Code quality

- `eslint` (version ^8.56.0) and associated plugins: Used to enforce formatting consistency across the project
  - `eslint-plugin-react` (version ^7.33.2)
  - `eslint-plugin-react-hooks` (version ^4.6.0)
  - `eslint-plugin-react-refresh` (version ^0.4.5)

### Styling and Design

The project uses Emotion CSS-in-JS for all styling, providing type-safe and component-scoped styles. Custom fonts are loaded via the `Fonts` component using variable font files:

- **Space Grotesk**: Primary display font with full weight range (100-900)
- **Inter**: Body text font with normal and italic variants
- **Quicksand**: Secondary font for specific UI elements

All fonts are optimized with `font-display: swap` for better performance and user experience.

### Environment Variables

The project uses Vite environment variables for configuration:

- `VITE_API_URL`: The link to the backend

These are defined in `src/constants.ts` and typed in `src/types/env.d.ts`.

### File system

This is a summary of the file structure of the project. It prioritizes clarity by detailing essential components and React configuration files while omitting other configuration, test, style, and auto-generated files.

```
📁klswe/ - configuration files for development, testing, and production build tools
├─📁public/ - static favicon, logo, manifest files, and custom fonts
│ └─📁fonts/ - custom font files (Space Grotesk, Inter, Quicksand)
├─📁src/
│ ├─📁assets/ - static image files
│ │ └─📁images/ - images and SVG assets (hexagon.svg, external-link.png, project-placeholder.png)
│ ├─📁components/
│ │ ├─📁NavBar/ - navigation bar components
│ │ │ ├─📜NavBar.tsx - hamburger menu navigation component
│ │ │ ├─📜MainTitle.tsx - site title component
│ │ │ ├─📜DropDownMenu.tsx - dropdown menu component
│ │ │ ├─📜LinkButtons.tsx - navigation link buttons
│ │ │ └─📜*.styles.ts - Emotion CSS-in-JS style definitions
│ │ ├─📁Pages/
│ │ │ ├─📁Home/ - home page components
│ │ │ │ ├─📜Home.tsx - main landing page with hero, about, and projects sections
│ │ │ │ ├─📜HomeBackground.tsx - star field and gradient background components
│ │ │ │ ├─📜ProjectsOverview.tsx - carousel component that fetches and displays projects
│ │ │ │ └─📜*.styles.ts - Emotion CSS-in-JS style definitions
│ │ │ ├─📜NotFoundError.tsx - 404 error page
│ │ │ └─📜utils.ts - shared utility functions
│ │ └─📁ResponsiveComponents/
│ │   ├─📜ResponsiveComponent.tsx - Applies styles conditionally based on screen size
│ │   └─📜ToggleStyledComponent.tsx - Applies different styles based on conditions
│ ├─📁hooks/ - custom React hooks and context providers
│ │ ├─📜PageNumberContext.tsx - current page tracking
│ │ ├─📜ViewPortContext.tsx - responsive viewport detection
│ │ ├─📜PageNumbers.ts - page configuration and routing constants
│ │ └─📜ContextProviderProps.ts - shared context provider prop types
│ ├─📁types/ - TypeScript type definitions
│ │ ├─📜env.d.ts - environment variable types
│ │ ├─📜images.d.ts - image import types
│ │ ├─📜ResponsiveComponentTypes.ts - responsive component interfaces
│ │ └─📜StyleTypes.ts - Emotion CSS-in-JS type definitions
│ ├─📜constants.ts - environment variables and configuration constants
│ ├─📜index.css - global CSS styles
│ ├─📜routes.ts - lazy-loaded route configuration
│ └─📜fontStacks.ts - font family definitions
├─📜fonts.tsx - custom font loading component using Emotion
├─📜index.tsx - main application entry point with context providers
├─📜jest.config.ts - Jest testing configuration
├─📜jest.setup.ts - Jest test environment setup
├─📜tsconfig.json - TypeScript configuration
└─📜vite.config.js - Vite build tool configuration
```

## License

This project is open-source and licensed under the MIT License. This license allows for free use, modification, and distribution with attribution to the original author. Please review `LICENSE.txt` for specific terms and conditions.
