<template>
  <ul class="services-list">
    <ServiceItem
      v-for="(service, index) in services"
      :key="service.title"
      :index="String(index + 1).padStart(2, '0')"
      :title="service.title"
      :description="service.description"
    />
  </ul>
</template>

<script lang="ts" setup>
import ServiceItem from '@/components/ServiceItem.vue'

defineProps<{
  services: {
    title: string
    description: string
  }[]
}>()
</script>

<style scoped>
/* =========================
   Base grid
   ========================= */
.services-list {
  list-style: none;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 3.5rem 3rem;

  position: relative;
}

/* =========================
   Subtle vertical rhythm line
   ========================= */
.services-list::before {
  content: '';
  position: absolute;

  left: 0;
  top: 0;
  bottom: 0;

  width: 1px;
  background: var(--text-primary);
  opacity: 0.05;

  pointer-events: none;
}

/* =========================
   Alignment polish
   ========================= */
.services-list :deep(.service-item) {
  padding-left: 1rem;
}

/* =========================
   Compact contexts (later reuse)
   ========================= */
@container (max-width: 500px) {
  .services-list {
    gap: 2.25rem;
  }
}

/* =========================
   Tablet
   ========================= */
@media (max-width: 1024px) {
  .services-list {
    gap: 3rem 2.5rem;
  }
}

/* =========================
   Mobile
   ========================= */
@media (max-width: 768px) {
  .services-list {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }

  .services-list::before {
    display: none;
  }

  .services-list :deep(.service-item) {
    padding-left: 0;
  }
}
</style>
