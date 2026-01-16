<template>
  <li class="service-item">
    <span class="service-index">
      <Text
        :text="{
          type: 'span',
          content: index
        }"
      />
    </span>

    <div class="service-content">
      <Title
        :title="{
          heading: 'h3',
          text: title
        }"
        class="service-title"
      />

      <Text
        :text="{
          type: 'p',
          content: description
        }"
        class="service-description"
      />

      <!-- Image placeholder -->
      <div class="service-image">
        <img
          src="/images/image_placeholder.png"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  </li>
</template>

<script lang="ts" setup>
import Text from '@/components/Text.vue'
import Title from '@/components/Title.vue'

defineProps<{
  index: string
  title: string
  description: string
}>()
</script>

<style scoped>
/* =========================
   Base layout
   ========================= */
.service-item {
  position: relative;

  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  padding: 0.25rem 0;

  transition: transform 0.25s ease;
}

/* =========================
   Index number
   ========================= */
.service-index {
  flex-shrink: 0;

  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.18em;

  opacity: 0.35;
  margin-top: 0.25rem;

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

/* =========================
   Content
   ========================= */
.service-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Title (Title component wrapper) */
.service-title {
  margin: 0;

  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: var(--text-primary);
}

/* Description (Text component) */
.service-description {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-secondary);

  max-width: 34ch;
}

/* =========================
   Image container
   ========================= */
.service-image {
  margin-top: 0.5rem;

  width: 100%;
  max-width: 260px;
  aspect-ratio: 4 / 3;

  overflow: hidden;
  border-radius: 0.75rem;

  background: rgba(0, 0, 0, 0.04);
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  filter: grayscale(100%);
  opacity: 0.9;

  transition:
    transform 0.35s ease,
    filter 0.35s ease,
    opacity 0.35s ease;
}

/* =========================
   Accent line
   ========================= */
.service-item::before {
  content: '';
  position: absolute;

  left: -0.75rem;
  top: 0.4rem;
  bottom: 0.4rem;

  width: 2px;
  background: var(--text-primary);
  opacity: 0.08;

  transition: opacity 0.25s ease;
}

/* =========================
   Hover polish
   ========================= */
@media (hover: hover) {
  .service-item:hover {
    transform: translateY(-2px);
  }

  .service-item:hover::before {
    opacity: 0.25;
  }

  .service-item:hover .service-index {
    opacity: 0.7;
    transform: translateY(-1px);
  }

  .service-item:hover .service-image img {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.03);
  }
}

/* =========================
   Mobile tweaks
   ========================= */
@media (max-width: 768px) {
  .service-content {
    gap: 0.6rem;
  }

  .service-image {
    max-width: 100%;
  }

  .service-title {
    font-size: 1rem;
  }

  .service-description {
    font-size: 0.9rem;
  }
}
</style>
