# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Setup Project

This project use libraries following below:

- [tailwindcss](https://tailwindcss.com/docs/guides/vite)
- [scss](https://www.npmjs.com/package/sass)
- [zustand](https://zustand-demo.pmnd.rs/)
- [React Hook Form](https://react-hook-form.com/)
- [React Router](https://reactrouter.com/en/main)
- [fontawesome](https://docs.fontawesome.com/web/use-with/react/)

## 1. Setup vite project

### 1.1 Setup the vite.config

Add the port configuration and resolve alias configuration in your vite.config.ts file

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
```

### 1.2 Setup the tsconfig

Add the baseUrl configuration and paths configuration in your tsconfig.js file

```json
{
  "compilerOptions": {
    //add this config in compilerOptions
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### 1.3 Setup disable .eslintrc.cjs

You do not need to notification from eslint about define variable type any. You add config to .eslintrc.cjs file

```cjs
module.exports = {
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};
```

## 2. Install Tailwind CSS with Vite project

Setting up Tailwind CSS in a Vite project.

### 2.1 Install Tailwind CSS

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2.2 Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

```json
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2.3 Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Install the Scss in project

Install Scss with npm install packet

```bash
npm install -D sass
```

## 4. Install ZUSTAND in vite project

Install [ZUSTAND](https://github.com/pmndrs/zustand/tree/main) with npm install packet

```bash
npm install zustand # or yarn add zustand or pnpm add zustand
```

## 5. Install React Hook Form in vite project

Install [React Hook Form](https://react-hook-form.com/get-started) with npm install packet

```bash
npm install react-hook-form
```

## 6. Install React Router in vite project

Install [React Router](https://reactrouter.com/en/main/start/tutorial) with npm install packet

### 6.1 Install React Router

```bash
npm install react-router-dom localforage match-sorter sort-by
```

### 6.2 Setup React Router

### 6.2.1 Setup Project Directory Structure

Create the initial directory structure in the 'src' path by creating a folder named 'pages' to store supplementary pages, and create a folder 'home' to store the main page.

```bash
$ mkdir src/pages
$ mkdir src/pages/home
$ mkdir src/pages/detail
```

### Project Directory Structure

- **src/**
  - **assets/**
  - _images/_
  - _styles/_
  - **components/**
    - _Header/_
      - Header.js
      - Header.css
    - _Footer/_
      - Footer.js
      - Footer.css
  - **pages/**
    - _home/_
      - index.tsx
    - \_detail
      - index.tsx

### 6.2.2 Setup Router

Add the router method of your template page in your App.tsx file.

<b>Example code:</b>

```tsx
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import HomePage from "@/pages/home";
import DetailPage from "@/pages/detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
```

## 7. Setup Services

setup services for get pokedex data

### 7.1 Setup Project Directory Structure

Create the initial directory structure in the 'src' path by creating a folder named 'pages' to store supplementary pages, and create a folder 'home' to store the main page.

```bash
$ mkdir src/services
```

### Project Directory Structure

- **src/**
  - **services/**
    - index.ts
    - pokemonDetail.ts
    - pokemonList.ts

### 7.2 Choose Pokemon service

This project create the service by [PokéAPI](https://pokeapi.co/)

#### Note: <span>You can see api in [PokéAPI.http](PokéAPI.http)</span>

example json data from PokéAPI

```json
{
  "abilities": [
    {
      "ability": {
        "name": "torrent",
        "url": "https://pokeapi.co/api/v2/ability/67/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "rain-dish",
        "url": "https://pokeapi.co/api/v2/ability/44/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ]
  ...
}
```

### 7.3 Install Axios

This project use libraries [Axios](https://axios-http.com/docs/intro) for Retrieve information from Retrieve PokéAPI

```bash
$ npm install axios
```

#### Note:

_Setup Project Directory Structure for collect constants variables in the project_

```bash
$ mkdir src/utils
```

#### Project Directory Structure

- **src/**

  - **utils/**
    - constants.ts

_Setup Project Directory Structure for collect variables type in the project_

```bash
$ mkdir src/interface
```

#### Project Directory Structure

- **src/**

  - **interface/**
    - PokemonDetail.ts
    - PokemonList.ts

## 8 Install Font Awesome ICON Packet

Install Font Awesome see. Docs at [Font Awesome Docs](https://docs.fontawesome.com/web/use-with/react/)

### 8.1 Add SVG Core

First you’ll need to use npm or yarn to install the core package which includes all the utilities to make the icons work:

```bash
npm i --save @fortawesome/fontawesome-svg-core
```

### 8.2 Add Icon Packages

Next, you’ll install the icons you want to use — you can choose a Free SVG Icon Packages, and select any of our styles.

```bash
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

### 8.3 Add the React Component

And lastly, install the Font Awesome React component:

```bash
npm i --save @fortawesome/react-fontawesome@latest
```

## 9 Setup and Install React Loading

Easy to use loading animations for React projects. Uses SVG animations from Brent Jackson's loading project.

[see git repository](https://github.com/fakiolinho/react-loading) [see Demo:](https://codesandbox.io/s/mqx0ql55qp)

```bash
npm i react-loading
```

## 10 Install APEX CHARTS

Use APEX CHARTS for create pokemon status chart

Installing [APEXCHARTS](https://apexcharts.com/docs/react-charts/) via npm

```bash
npm install --save react-apexcharts apexcharts
```
