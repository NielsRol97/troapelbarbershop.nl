<template>
  <Hero :hero="hero">
    <Button
      :button="{
        text: 'Reserveer nu',
        href: 'https://1kapper.nl/salons/troapel-barbershop-ter-apel/maak-een-afspraak',
        primary: true
      }"
    />
  </Hero>

  <IntroServices />
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Button from '@/components/Button.vue'
import IntroServices from '@/components/IntroServices.vue'
import type { Hero as HeroType } from '@/types/hero'

const hero: HeroType = {
  title: 'Troapel Barbershop. Strak en tijdloos.',
  subtitle: {
    type: 'p',
    content: 'Ambachtelijke knip- en scheerbeurten in Ter Apel.'
  },
  backgroundImage: '/images/image_placeholder.png'
}
</script>
