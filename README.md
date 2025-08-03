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
     - [Layout components](#layout-components)
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

### Component design

This project is structured with a modular component design, ensuring reusability and responsiveness across different pages. Key components are built to handle specific tasks, such as responsive layout adjustments, page metadata, and navigation, while smaller, focused components manage interactive elements like buttons and animations.

#### Contexts

- `CsrfCookieContext`: Manages the CSRF token for requests to the backend API. The `CsrfCookieProvider` checks for an existing CSRF token in cookies or local storage; if none is found, it fetches a new token from the backend and updates the context.
- `PageNumberContext`: Tracks the current page number, making it easy for components to identify and update the active page. The `CurrentPageProvider` exposes `currentPage` and `setCurrentPage` to child components, enabling them to highlight active pages and apply page-specific styles.
- `ViewPortContext`: Manages a boolean `isMobile` state, which adjusts based on the viewport width ("mobile" defined as <= 600px). The `IsMobileProvider` listens for window resizing events and updates `isMobile` accordingly, allowing components to conditionally render or style content based on the device type.

#### Higher-order components

Higher-order components are designed to wrap other components to add functionality or conditional styling. These components provide a foundation for responsive design and state-based style changes, making it easy to adapt UI elements to window and interaction states.

- `Responsive`: A versatile wrapper component used to apply conditional styling based on screen size, enabling seamless transitions between mobile and desktop layouts.
- `Toggle`: This component is designed to conditionally style elements. Toggle accepts a Component prop (allowing any component to be wrapped) and applies a default style by default, switching to an alternate style when the condition passed in is true. CSS transitions are used to create a smooth effect when the style changes. If the condition is false, the component applies the alternate style on hover and focus for added interactivity.

#### Layout components

Layout components establish the core structure of each page and serve as containers for page content, handling key tasks such as navigation, page metadata, and overall layout consistency.

- `Page`: This component acts as a wrapper for each main page's content, setting up a consistent layout across the application. It includes page-level setup such as setting the document title and logging page views via API requests to track user engagement.
- `NavBar`: This component provides the main navigation for the application, with links to key pages and various projects. It includes a dropdown menu for organizing project links and uses the `Toggle` component to highlight the currently active page.

#### Page-specific interactive components

Lower-level components are designed as containers for primary content and specific user interactions, focusing on delivering unique, immersive experiences. These components are primarily visual and are tailored to the specific needs of each page, not general reusability.

**Current Pages:**

- **Home**: Main landing area with a focus on visual appeal and user engagement
- **About Me**: Personal information and professional background
- **Login**: Authentication interface for user access
- **Error Pages**: Handles 404 and other error states gracefully

### Production dependencies

The following dependencies are necessary to run the project.

- `js-cookie` (version ^3.0.4): Utility for retrieving cookies
- `react` (version ^18.2.0): Core React library used to build the interface
- `react-dom` (version ^18.2.0):Used to render React components to the DOM
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

### File system

This is a summary of the file structure of the project. It prioritizes clarity by detailing essential components and React configuration files while omitting other configuration, test, style, and auto-generated files.

```
📁klswe/ - configuration files for development, testing, and production build tools
├─📁.github/
│ └─📁workflows/
│   └─📜cicd.yml - GitHub Actions script for automated testing and deployment
├─📁public/ - static favicon, logo, and manifest files
└─📁src/
  ├─📁assets/ - static audio and image files
  ├─📁components/
  │ ├─📁NavBar/ - components used in the navigation bar in every page
  │ ├─📁Pages/
  │ │ ├─📜Page.tsx - core layout component that consistently formats page content and renders navigaiton components
  │ │ ├─📜Home.tsx - main landing page with interactive star field effect
  │ │ ├─📜AboutMe.tsx - personal information and professional background
  │ │ ├─📜Login.tsx - authentication interface
  │ │ ├─📜NotFoundError.tsx - 404 error page
  │ │ ├─📜utils.ts - shared utility functions
  │ │ └─📜*.styles.ts - page-specific styling files
  │ └─📁ResponsiveComponents/
  │   ├─📜ResonsiveComponent.tsx - Applies styles conditionally based on the screen size
  │   └─📜ToggleStyledComponent.tsx - Applies different styles based on a given condition
  ├─📁hooks/ - custom hooks for providing access to the values of different contexts
  ├─📁types/ - stores type definitions and interfaces for consistent data structures and improved type safety
  ├─📜constants.ts - exports environment variables as constants for easy access
  ├─📜index.css - CSS file containing global styles
  └─📜routes.ts - sets up routing for the main page content components
```

## License

This project is open-source and licensed under the MIT License. This license allows for free use, modification, and distribution with attribution to the original author. Please review `LICENSE.txt` for specific terms and conditions.
