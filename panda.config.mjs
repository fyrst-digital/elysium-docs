import { defineConfig } from "@pandacss/dev"
import { buttonRecipe } from './panda.recipes'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: [
    "./content/**/*.{vue,md}",
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
      breakpoints: {
        sm: '420px',
        md: '560px',
        lg: '640px',
        xl: '768px',
        '2xl': '960px',
        '3xl': '1024px',
        '4xl': '1140px',
        '5xl': '1280px',
        '6xl': '1440px',
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
