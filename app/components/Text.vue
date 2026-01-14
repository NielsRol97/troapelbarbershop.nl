<template>
  <component :is="text.type" class="text">
    {{ text.content }}
  </component>
</template>

<script lang="ts" setup>
import type { Text } from '@/types/text'

defineProps<{
  text: Text
}>()
</script>

<style scoped>
.text {
  line-height: 1.6;
}
</style>
