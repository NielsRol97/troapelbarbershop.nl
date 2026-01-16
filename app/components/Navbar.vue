<template>
  <!-- Toggle button -->
  <button
    class="nav-toggle"
    aria-label="Open menu"
    aria-controls="main-navigation"
    :aria-expanded="isOpen"
    @click="toggle"
  >
    ☰
  </button>

  <!-- Overlay navigation -->
  <nav
    id="main-navigation"
    class="nav-wrapper"
    :class="{ 'nav-wrapper--open': isOpen }"
  >
    <ul class="nav-list">
      <NavItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        @select="close"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useNavigation } from '@/composables/navigation'
import { useOverlayMenu } from '@/composables/overlaymenu'

const { items } = useNavigation()
const { isOpen, toggle, close } = useOverlayMenu()
</script>

<style scoped>
/* Toggle button */
.nav-toggle {
  position: relative;
  z-index: 1100;

  background: none;
  border: none;

  font-family: var(--font-family-base);
  font-size: var(--font-size-lg, 1.25rem);
  color: var(--background-muted);

  cursor: pointer;
  padding: var(--space-sm, 0.5rem);
}

/* Overlay nav */
.nav-wrapper {
  position: fixed;
  inset: 0;
  z-index: 1000;

  background: var(--header-background);

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  pointer-events: none;
  transform: translateY(-10%);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

/* Open state */
.nav-wrapper--open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

/* Nav list */
.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;

  font-size: var(--font-size-xl, 2rem);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg, 2rem);
}
</style>
