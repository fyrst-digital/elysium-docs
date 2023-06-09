<script setup>
    import { computed } from 'vue'
    import { useData } from 'vitepress'

    const { isDark } = useData();
    const logo = computed(() => {
        if (isDark.value === true) {
            return '/logo-icon-bg-trans-light.svg'
        }
        return '/logo-icon-bg-trans-dark.svg'
    });
</script>

<template>
        <img :src="logo" class="image">
</template>

<style scoped>
    .image {
        width: 2rem;
        margin-right: .5rem;
    }
</style>