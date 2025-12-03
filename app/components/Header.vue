<template>
    <header class="header-wrapper">
      <Navbar />
    </header>
</template>

<script lang="ts" setup>
  import Navbar from '@/components/Navbar.vue';
</script>

<style>
.header-wrapper {
  width: 100%;
  height: 10vh;
  background: linear-gradient(135deg, #141414, #2a2a2a);
  border-bottom: 1px solid rgba(255,255,255,0.04);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
}




</style>