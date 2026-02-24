---
redirectFrom: /
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  router.go('/v3.0/')
})
</script>

# Redirecting to latest version...

[Click here if you're not redirected](/v3.0/)
