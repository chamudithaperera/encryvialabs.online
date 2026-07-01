import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["**/node_modules/**", "**/.next/**", "**/dist/**", "**/coverage/**", "**/next-env.d.ts"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["apps/web/components/**/*.{ts,tsx}"],
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
