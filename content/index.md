---
redirectFrom: /
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  // Redirect to latest version - update this when adding new versions
  router.go('/v4.0/')
})
</script>

# Redirecting to latest version...

[Click here if you're not redirected](/v4.0/)
