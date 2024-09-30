// @ts-check
// import withNuxt from "./.nuxt/eslint.config.mjs";
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  // options here
  dirs: { src: ["**/*.vue"] },
})
  .prepend
  // ...Prepend some flat configs in front
  ()
  // Override some rules in a specific config, based on their name
  .override("nuxt/typescript/rules", {
    files: ["**/*.vue"],
    rules: {
      // ...Override rules, for example:
      curly: ["error", "all"],
      "@typescript-eslint/no-unused-vars": "error",

      "@typescript-eslint/ban-types": "off",
    },
  })
  .append({
    files: [
      "**/*.vue",
      "**/*.ts",
      "**/*.mts",
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs",
    ],
  });
