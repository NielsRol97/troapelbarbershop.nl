<template>
  <li>
    <a :href="to"><slot /></a>
  </li>
</template>

<script lang="ts" setup>
defineProps<{
  to: string
}>()
</script>
