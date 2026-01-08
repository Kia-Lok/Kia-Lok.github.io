<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { onMounted } from 'vue'
import { useRouter, useData } from 'vitepress'

const { Layout } = DefaultTheme
const router = useRouter()
const { frontmatter } = useData()

const setupZoom = () => {
  mediumZoom('[data-zoomable]', {
    background: 'rgba(0, 0, 0, 0.9)', // plays nicely with your black theme
    margin: 24
  })
}

// run once, and again after every route change
onMounted(setupZoom)
router.onAfterRouteChange = () => setupZoom()
</script>

<template>
  <Layout>
    <template #doc-before>
      <h1 v-if="frontmatter.title" class="doc-title">
        {{ frontmatter.title }}
      </h1>
    </template>
  </Layout>
</template>

<style scoped>
.doc-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .doc-title {
    font-size: 2rem;
  }
}
</style>