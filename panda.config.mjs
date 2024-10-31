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
  globalVars: {
    // Useful for theme customization
    '--vp-c-brand-1': 'var(--colors-primary) !important',
  },
  // Useful for theme customization
  theme: {
    extend: {
      // tokens: {
      //   colors: {
      //     primary: { value: '#a8b1ff' },
      //   },
      // },
      semanticTokens: {
        colors: {
          primary: { value: '{colors.fuchsia.300}' },
        },
      }
    },
  },
  // The output directory for your css system
  outdir: "styled-system",
});
