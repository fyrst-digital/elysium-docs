import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./pages/**/*.{js,jsx,ts,tsx}", 
    "./.vitepress/components/**/*.{js,jsx,ts,tsx,vue}",
    "./.vitepress/theme/**/*.{js,jsx,ts,tsx,vue}"
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
