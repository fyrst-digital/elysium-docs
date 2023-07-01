<script setup lang="ts">
  defineProps<{
    title?: string
  }>()
</script>
<template>
  <div class="wrapper"> 

    <div class="container">
      <h2 class="title">{{ title }}</h2>
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
  .container {
    margin: 0 auto;
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