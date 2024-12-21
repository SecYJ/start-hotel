import react from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginRouter from "@tanstack/eslint-plugin-router";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
    {
        ignores: [
            "dist",
            ".vinxi",
            ".wrangler",
            ".vercel",
            ".netlify",
            ".output",
            "build/",
        ],
    },
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            // unusedImport.configs,
            eslintConfigPrettier,
            //   ...pluginQuery.configs["flat/recommended"],
            //   ...pluginRouter.configs["flat/recommended"],
        ],
    },
    tseslint.configs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            "react-hooks": reactHooks,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
        },
    },
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                project: "./tsconfig.json",
                tsconfigRootDir: import.meta.dirname,
            },
        },
        ...react.configs["recommended-type-checked"],
    },
    {
        plugins: {
            "@tanstack/router": pluginRouter,
        },
        rules: {
            "@tanstack/router/create-route-property-order": "error",
        },
    },
);
