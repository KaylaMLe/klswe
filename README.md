# Front end for [klswe](https://www.klswe.com)
My personal website is a centralized platform to display my professional portfolio, projects, and expertise, offering a comprehensive view of my skills and interests. With a strong emphasis on user experience, scalability, and maintainability, it provides an engaging way to explore my work and connect with me. I hope you have as much fun exploring the code as I have building it!

## Table of contents

1. [About this repository](#about-this-repository)
2. [Getting started](#getting-started)
      - [Prerequisites](#prerequisites)
      - [Installation](#installation)
      - [Running the project](#running-the-project)
      - [Testing](#testing)
3. [Project design](#project-design)
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

### Production dependencies
The following dependencies are necessary to run the project.

- `@emotion/css` (version ^11.11.2): CSS-in-JS library for styling
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

## License
