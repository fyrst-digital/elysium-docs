<script setup lang="ts">
    import DefaultTheme from 'vitepress/theme'

    const { Layout } = DefaultTheme
    // #161618
</script>

<template>
	<Layout />
</template>

<style>
.vp-doc .custom-block {
    margin: 40px 0;
}
.VPSidebar {
    border-right: 1px solid var(--vp-sidebar-border-color);
}
.group + .group {
    border-top: 0 none !important;
}
.VPNavBarTitle .title {
    border: 0 none !important;
}
.VPNavBar .divider {
    display: none !important;
}
.VPSidebarItem.level-0 {
    padding-bottom: 10px !important;
}
:root {
    --vp-sidebar-bg-color: #f8f8f7;
    --vp-sidebar-border-color: rgba(0,0,0,.02);
}
.dark {
    --vp-sidebar-bg-color: #161618;
    --vp-sidebar-border-color: rgba(255,255,255,.06);
}
</style>