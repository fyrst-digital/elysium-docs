import { defineConfig } from "@pandacss/dev"
import { buttonRecipe } from './panda.recipes'

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
    '--vp-c-brand-1': 'var(--colors-primary) !important',
    '--vp-c-gutter': 'var(--vp-c-divider) !important',
    '--vp-button-brand-bg': 'var(--colors-primary) !important',
  },
  staticCss: {
    recipes: {
      button: ['*']
    }
  },
  jsxFramework: 'vue',
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: { 
            value: { base: '{colors.fuchsia.700}', _dark: '{colors.fuchsia.300}' },
          },
          contrast: { 
            soft: {
              value: { base: 'var(--vp-c-bg-soft)', _dark: 'var(--vp-c-bg)' },
            },
          },
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
      },
      recipes: {
        button: buttonRecipe
      },
    },
  },
  // The output directory for your css system
  outdir: "styled-system",
});
