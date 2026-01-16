<template>
  <section
    class="hero-wrapper"
    :style="backgroundStyle"
  >
    <div class="hero-content">
      <Title
        :title="{
          heading: hero.heading ?? 'h1',
          text: hero.title
        }"
      />

      <Text
        v-if="hero.subtitle"
        :text="hero.subtitle"
      />

      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { Hero } from '@/types/hero'

import Title from '@/components/Title.vue'
import Text from '@/components/Text.vue'

const props = defineProps<{
  hero: Hero
}>()

const backgroundStyle = computed(() =>
  props.hero.backgroundImage
    ? { backgroundImage: `url(${props.hero.backgroundImage})` }
    : undefined
)
</script>

<style scoped>
.hero-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
  background-position: center;
}

/* overlay */
.hero-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--overlay-dark);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;

  max-width: 720px;
  padding: 2rem;

  text-align: center;
  color: var(--text-inverse);

  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  animation: fadeUp 0.8s ease-out both;
}

/* context styling */
.hero-content :deep(.title) {
  font-size: clamp(2.6rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 700;
  color: var(--text-inverse);
}

.hero-content :deep(.text) {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 560px;
  margin: 0 auto;
}

/* animation */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
