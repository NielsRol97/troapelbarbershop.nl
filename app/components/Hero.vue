<template>
  <section class="hero-wrapper">
    <div class="hero-content">
      <Title
        :title="{
          heading: 'h1',
          text: 'Troapel Barbershop. Strak en tijdloos.'
        }"
      />

      <Text
        :text="{
          type: 'p',
          content: 'Ambachtelijke knip- en scheerbeurten in Ter Apel.'
        }"
      />

      <Button
        :button="{
          text: 'Reserveer nu',
          href: 'https://1kapper.nl/salons/troapel-barbershop-ter-apel/maak-een-afspraak',
          primary: true
        }"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
    import Title from '@/components/Title.vue'
    import Text from '@/components/Text.vue'
    import Button from '@/components/Button.vue'
</script>

<style scoped>
.hero-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('/images/image_placeholder.png');
  background-size: cover;
  background-position: center;
}

/* overlay */
.hero-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  padding: 2rem;
  text-align: center;
  color: #fff;

  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  animation: fadeUp 0.8s ease-out both;
}

/* FIX: scoped styles + child components */
.hero-content :deep(.title) {
  font-size: clamp(2.6rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 700;
  color: #fff;
}

.hero-content :deep(.text) {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 560px;
  margin: 0 auto;
}

/* subtiele animatie */
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
