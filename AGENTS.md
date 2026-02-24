# Agent Guidelines for Elysium Docs

This is a VitePress documentation site for Shopware plugins (Elysium). It uses Vue 3, TypeScript, and Panda CSS.

## Commands

### Development
```bash
bun run docs:dev        # Start VitePress dev server
bun run docs:preview    # Preview production build locally
```

### Build
```bash
bun run docs:build              # Build docs for production
bun run docs:deploy             # Full deploy: thumbnails + icons + build
bun run generate:thumbnails     # Generate image thumbnails
bun run build:icons             # Build icon sprites
bun run prepare                 # Generate Panda CSS (runs automatically on install)
```

### Testing
There are no automated tests in this project. Test any changes manually by running the dev server and verifying functionality.

## Code Style

### General
- Use TypeScript for all `.ts`, `.mts`, and `.vue` files
- Use 4 spaces for indentation (not tabs)
- No semicolons at end of statements
- Use single quotes for strings
- Use trailing commas
- Maximum line length: 120 characters

### File Organization
- Vue components: `.vitepress/components/`
- Composables: `.vitepress/composables/`
- Config files: `.vitepress/config.*.ts`
- Content (Markdown): `content/`
- Types/Config: Root level `.mts` files (`theme.config.mts`)

### Imports
```typescript
// Vue core imports
import { ref, computed, type PropType } from 'vue'

// Local imports - use relative paths
import { useImageZoom } from './../composables/image-zoom'
import Layout from '../components/Layout.vue'

// CSS-in-JS via Panda (use named import)
import { css } from 'styled-system/css'

// Type-only imports
import type { Theme } from 'vitepress'
```

### TypeScript
- Always type props in Vue components using `defineProps<Props>()` with interface
- Use `withDefaults` for optional props with default values
- Prefer explicit return types for computed properties
- Use type-only imports (`import type`) when not runtime values needed

```typescript
interface Props {
    basePath?: string
    src: string
    alt?: string
    lazy?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    basePath: "/images/",
    lazy: true,
})
```

### Vue Components
- Use `<script setup lang="ts">` for all Vue components
- Use PascalCase for component names (`Image.vue`, `Grid.vue`)
- Define props with interfaces above the script block
- Use `v-bind :class` with Panda CSS `css()` for styling

```vue
<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { css } from 'styled-system/css'
</script>

<template>
    <div :class="css({ display: 'flex', padding: '4' })">
        <slot />
    </div>
</template>
```

### Naming Conventions
- Files: kebab-case (`image-zoom.ts`, `config.sidebar.ts`)
- Components: PascalCase (`Image.vue`, `Layout.vue`)
- Variables/functions: camelCase
- Constants: camelCase or SCREAMING_SNAKE_CASE
- Interfaces: PascalCase with descriptive names (`interface Props`)

### CSS/Styling
- Use Panda CSS recipe system for reusable components (see `panda.config.mjs`)
- Use semantic tokens for colors and spacing
- Follow the responsive pattern: `{ base: 'value', md: 'value', _dark: 'value' }`
- Use CSS custom properties for VitePress theme values: `var(--vp-c-bg)`

```typescript
:class="css({
    display: 'flex',
    padding: '4',
    bg: { base: 'white', _dark: '#161618' },
    _hover: { transform: 'scale(1.05)' }
})"
```

### Error Handling
- Use optional chaining (`?.`) for safe property access
- Provide fallback values for computed properties
- Use null checks before optional operations

```typescript
const srcSet = computed(() => {
    if (props.sizes === false) return null
    return thumbnailSizes.map(size => {
        // ...
    }).join(', ')
})
```

### Documentation Content
- Markdown files go in `content/` directory
- Use frontmatter for metadata
- Support bilingual: English (`content/`) and German (`content/de/`)
- Use Vue components in Markdown via Markdown attributes syntax
- Keep line lengths reasonable in Markdown for readability

## Common Patterns

### Image Component Usage
```vue
<Image src="screenshot.png" alt="Description" :sizes="{ xs: 200, md: 400 }">
    <source srcset="..." type="image/webp">
</Image>
```

### Grid Layout
```vue
<Grid>
    <Column :cols="12" :md="6">Content</Column>
</Grid>
```

### Custom Components Registration
Registered globally in `.vitepress/theme/index.ts`:
- `Image` - Responsive image with zoom
- `Grid` - CSS Grid container
- `Column` - Grid column

## Project Structure
```
.
├── .vitepress/
│   ├── components/      # Vue components
│   ├── composables/     # Vue composables
│   ├── config.*.ts      # VitePress config files
│   └── theme/           # Theme setup
├── content/
│   ├── manual/          # English documentation
│   ├── guides/          # English guides
│   └── de/              # German translations
├── styled-system/      # Generated Panda CSS
└── theme.config.mts    # Theme constants/types
```

## Notes
- This is a documentation-only project (no backend/API)
- Images are stored in `/public/images/` with thumbnails in `/public/images/thumbnails/`
- Build dependencies include sharp for image processing
- Supports clean URLs (no `.html` extensions)

### Important: Vue 3 Ref Unwrapping
In Vue 3 `<script setup>`, refs are automatically unwrapped in templates. **NEVER use `.value` in template expressions.**

```typescript
// ❌ WRONG - in template
:src="`${resolvedBasePath.value}source/${src}`"

// ✅ CORRECT - in template  
:src="`${resolvedBasePath}source/${src}`"
```

Only use `.value` in `<script setup>` JavaScript code, NOT in the `<template>` section.
