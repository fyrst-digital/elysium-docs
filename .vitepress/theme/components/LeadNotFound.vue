<script setup lang="ts">
    import { useData } from 'vitepress';
    import { computed } from 'vue'
    import CustomButton from './../../../components/CustomButton.vue'
    const { localeIndex } = useData()

    const href = computed<string>(() => {

        if (localeIndex.value !== "root") {
            return '/' + localeIndex.value + '/'
        }
        return '/'
    })

    interface Props {
        subtext?: string
        description?: string
        buttonLabel?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        subtext: 'Page not found',
        description: 'But if you don\'t change your direction, and if you keep looking, you may end up where you are heading.',
        buttonLabel: 'Take me Home'
    });
</script>
<template>
    <div class="lead">

        <div class="header">
            <div class="title">
                404
            </div>
            <div class="subtext">
                {{ subtext }}
            </div>
            <hr class="divider" />
            <div class="description">
                {{ description }}
            </div>
            <CustomButton
                tag="a"
                :href="href"
                :text="buttonLabel"
                theme="alt"
                size="medium" />
        </div>
    </div>
</template>

<style scoped>
    .lead {
        padding: 4rem 2rem;
    }
    .header {
        line-height: 1.5;
        text-align: center;
    }
    .title {
        font-weight: 700;
        line-height: 1;
        font-size: clamp(3rem, 8vw, 5rem);
        color: var(--text-color-soft);
    }
    .subtext {
        font-weight: 600;
        font-size: clamp(1rem, 2.5vw, 1.5rem);    }
    .divider {
        border-width: 1px 0 0;
        border-color: var(--color-divider);
        width: 8rem;
        margin: 1rem auto;
    }
    .description {
        margin: 0 auto;
        max-width: 256px;
        font-size: 14px;
        font-weight: 500;
        color: var(--vp-c-text-2);
        line-height: 2;
        margin-bottom: 1rem;
    }
</style>