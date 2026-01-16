<template>
  <li class="nav-item">
    <NuxtLink
      class="nav-link"
      :to="item.to"
      @click="$emit('select')"
    >
      <Icon
        v-if="item.icon"
        :name="item.icon"
        class="nav-icon"
        aria-hidden="true"
      />
      <span class="nav-label">
        {{ item.label }}
      </span>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { NavItem } from '@/types/navigation'

defineProps<{
  item: NavItem
}>()

defineEmits<{
  (e: 'select'): void
}>()
</script>

<style scoped>
.nav-item {
  list-style: none;
}

/* Link container */
.nav-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm, 0.75rem);

  font-family: var(--font-family-base);
  font-size: var(--font-size-lg, 1.5rem);
  font-weight: 500;
  letter-spacing: 0.04em;

  color: var(--header-text);
  text-decoration: none;

  padding: var(--space-sm, 0.5rem) var(--space-md, 1rem);

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

/* Icon */
.nav-icon {
  font-size: 1.1em;
  width: 1.25em; /* vaste kolom voor uitlijning */
  text-align: center;
  opacity: 0.85;
  flex-shrink: 0;
}

/* Hover / focus */
.nav-link:hover,
.nav-link:focus-visible {
  opacity: 0.85;
  transform: translateY(-2px);
}

/* Active route */
.nav-link.router-link-active {
  font-size: var(--font-size-xl, 2rem);
  font-weight: 600;
}

.nav-link.router-link-active .nav-icon {
  opacity: 1;
}

/* Accessibility */
.nav-link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}
</style>
