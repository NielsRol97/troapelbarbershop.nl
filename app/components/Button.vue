<template>
  <component
    :is="tag"
    :href="isLink ? button.href : undefined"
    type="button"
    class="btn"
    :class="{ 'btn--primary': button.primary }"
    @click="button.onClick"
  >
    <span class="btn-label">
      {{ button.text }}
    </span>
  </component>
</template>

<script lang="ts" setup>
import type { Button } from '@/types/button'
import { computed } from 'vue'

const props = defineProps<{
  button: Button
}>()

const isLink = computed(() => !!props.button.href)
const tag = computed(() => (isLink.value ? 'a' : 'button'))
</script>

<style scoped>
.btn {
  --btn-bg: transparent;
  --btn-color: var(--text-primary);
  --btn-border: var(--text-primary);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 44px;
  padding: 0.85rem 1.75rem;

  font-family: var(--font-family-base);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.04em;

  border-radius: 999px; /* pill shape = modern */
  border: 1px solid var(--btn-border);

  background: var(--btn-bg);
  color: var(--btn-color);
  text-decoration: none;

  cursor: pointer;
  user-select: none;

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.08s ease;
}

/* Label for subtle motion */
.btn-label {
  display: inline-block;
  transition: transform 0.15s ease;
}

/* Primary */
.btn--primary {
  --btn-bg: var(--text-primary);
  --btn-color: var(--color-white);
  --btn-border: transparent;

  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.25);
}

.btn--primary:hover {
  background-color: var(--color-gray-900);
  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.35);
}

.btn--primary:hover .btn-label {
  transform: translateY(-1px);
}

.btn--primary:active {
  transform: translateY(1px);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.25);
}

/* Secondary */
.btn:not(.btn--primary) {
  background: transparent;
  color: var(--header-text);
  border-color: var(--header-text);
}

.btn:not(.btn--primary):hover {
  background: rgba(255, 255, 255, 0.1);
}

.btn:not(.btn--primary):hover .btn-label {
  transform: translateY(-1px);
}

/* Focus (keyboard users) */
.btn:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 3px rgba(255, 255, 255, 0.25);
}

/* Disabled */
.btn:disabled,
.btn[aria-disabled="true"] {
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
  box-shadow: none;
}
</style>
