<script setup lang="ts">
  defineProps<{
    title?: string,
    titleTag?: string,
  }>()
</script>
<template>
  <div class="wrapper"> 

    <div class="container">
      <div class="box">

        <component :is="titleTag" class="title">{{ title }}</component>
        <slot name="before-content" />
        <div class="content">
          <slot/>
        </div>
        <slot name="after-content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    position: relative;
  }
  .container {
    margin: 0 auto;
    padding: 0 24px;
    max-width: 1152px;
  }
  .box {
    --border-color: rgba(255,255,255,.15);
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
  }
  .dark .box::after {
    --border-color: rgba(255,255,255,.15);
  }
  .title {
    font-weight: 700;
    font-size: 1.5rem;
    padding: 1rem 0;
    line-height: 1.5;
  }
  .content {
    line-height: 1.75;
    padding: 1rem 0;
    color: var(--vp-c-text-2);
  }
  @media (min-width: 640px) {
    .box {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }
    .wrapper {
    }
  }

  @media (min-width: 960px) {
    .box {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    .wrapper {
    }
  }
</style>