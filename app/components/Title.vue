<template>
  <component :is="title.heading" class="title">
    {{ title.text }}
  </component>
</template>

<script lang="ts" setup>
  import type { Title } from '@/types/title'

  defineProps<{
    title: Title
  }>()
</script>

<style>

</style>