<template>
  <section class="intro-services-wrapper">
    <div class="intro-inner">
      <Title
        :title="{
          heading: 'h2',
          text: 'Onze diensten'
        }"
        class="intro-title"
      />

      <ServiceList :services="services" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import Title from '@/components/Title.vue'
import ServiceList from '@/components/ServiceList.vue'

const services = [
  {
    title: 'Knippen',
    description: 'Strak geknipt, met oog voor detail.'
  },
  {
    title: 'Scheren',
    description: 'Klassiek scheren met warme doeken.'
  },
  {
    title: 'Baard & trim',
    description: 'Van onderhoud tot volledige styling.'
  }
]
</script>

<style scoped>
/* =========================
   Section wrapper
   ========================= */
.intro-services-wrapper {
  position: relative;

  width: 100%;
  padding: clamp(4rem, 8vw, 6.5rem) 2rem;

  background: var(--background-page);
}

/* Subtle separation from previous section */
.intro-services-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: min(90%, 1040px);
  height: 1px;

  background: rgba(0, 0, 0, 0.06);
}

/* =========================
   Inner container
   ========================= */
.intro-inner {
  max-width: 1040px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

/* =========================
   Title styling (contextual)
   ========================= */
.intro-title {
  margin: 0;
  text-align: center;

  font-size: clamp(1.4rem, 2.5vw, 1.6rem);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: var(--text-primary);
}

/* =========================
   Mobile refinements
   ========================= */
@media (max-width: 768px) {
  .intro-inner {
    gap: 2.75rem;
  }
}
</style>
