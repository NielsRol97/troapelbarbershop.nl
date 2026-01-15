<template>
  <section class="hero-wrapper">
    <Button
      :button="{
        text: 'Reserveer nu',
        href: 'https://1kapper.nl/salons/troapel-barbershop-ter-apel/maak-een-afspraak',
        primary: true
      }"
    />
  </section>
</template>


<script lang="ts" setup>
  
</script>

<style>
.hero-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;

  background-image: url('/images/image_placeholder.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-wrapper::before {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
}

</style>