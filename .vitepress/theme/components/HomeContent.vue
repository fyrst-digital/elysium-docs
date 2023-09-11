<script setup lang="ts">
  defineProps<{
    title?: string,
    titleTag?: string,
  }>()
</script>
<template>
  <div class="wrapper"> 

    <div class="container">
      <component :is="titleTag" class="title">{{ title }}</component>
      <slot name="before-content" />
      <div class="content">
        <slot/>
      </div>
      <slot name="after-content" />
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    position: relative;
    padding: 12px 24px;
  }
  .wrapper::after {
    content:'';
    display: block;
    height: 1px;
    background-color: rgba(0,0,0,.15);
    position: relative;
    inset: auto auto 0;
    transform: translateY(2rem);
    width: 100%;
    max-width: 24rem;
    margin: 0 auto;
  }
  .dark .wrapper::after {
    background-color: rgba(255,255,255,.15);
  }
  .container {
    margin: 0 auto;
    padding: 0 24px;
    max-width: 1152px;
  }
  .title {
    font-weight: 700;
    font-size: 1.5rem;
    padding: 1.5rem 0;
    line-height: 1.5;
  }
  .content {
    line-height: 1.75;
  }
  @media (min-width: 640px) {
    .wrapper {
      padding: 24px 48px;
    }
  }

  @media (min-width: 960px) {
    .wrapper {
      padding: 32px 64px;
    }
  }
</style>