# GREGA ONE COMPANY

Plateforme immobilière complète avec design révolutionnaire noir et blanc.

## 🚀 Domaine principal

- Site accessible sur : https://gregaonecompany.fr
- Version www : https://www.gregaonecompany.fr

## Technologies

- React + TypeScript + Vite
- Framer Motion pour les animations
- Tailwind CSS pour le design
- Déployé sur Vercel

## Déploiement

Le site est automatiquement déployé sur Vercel à chaque push sur la branche main.

---

_Dernière mise à jour SSL : Janvier 2025_

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // other rules...
  settings: { react: { version: "18.3" } },
  plugins: {
    // other plugins...
    react,
  },
  rules: {
    // other rules...
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
