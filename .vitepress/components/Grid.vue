<script setup lang="ts">
    import { css } from 'styled-system/css'
</script>

<template>
    <div 
        :class="css({
            gap: '24px',
            paddingBlock: '24px',
        })"
        :style="{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        }">
        <slot />
    </div>
</template>