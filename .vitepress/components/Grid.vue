<script setup lang="ts">
    import { css } from 'styled-system/css'
</script>

<template>
    <div 
        :class="css({
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        })">
        <slot></slot>
    </div>
</template>