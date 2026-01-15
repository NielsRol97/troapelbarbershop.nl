<template>
  <component
    :is="tag"
    :href="isLink ? button.href : undefined"
    type="button"
    class="btn"
    :class="{ 'btn--primary': button.primary }"
    @click="button.onClick"
  >
    {{ button.text }}
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


<style>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 1.5rem;
  min-height: 44px; /* mobile-friendly */

  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1;

  border-radius: 0.5rem;
  border: 1px solid transparent;

  text-decoration: none;
  cursor: pointer;

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.05s ease;
}

/* Primary button */
.btn--primary {
  background-color: #111;
  color: #fff;
}

.btn--primary:hover {
  background-color: #000;
}

.btn--primary:active {
  transform: translateY(1px);
}

/* Secondary button */
.btn:not(.btn--primary) {
  background-color: transparent;
  color: #111;
  border-color: #111;
}

.btn:not(.btn--primary):hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Focus (keyboard users) */
.btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
}

/* Disabled (future-proof) */
.btn:disabled,
.btn[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>