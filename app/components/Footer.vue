<template>
  <footer class="footer-wrapper">
    <div class="footer-grid">
      <!-- Contact -->
      <div class="footer-block">
        <p><strong>Troapel Barbershop</strong></p>
        <p>{{ address }}</p>
        <p>
          <a :href="`tel:${phone}`">{{ phone }}</a><br />
          <a :href="`mailto:${email}`">{{ email }}</a>
        </p>
      </div>

      <!-- Opening hours -->
      <div class="footer-block">
        <p><strong>Openingstijden</strong></p>
        <ul class="opening-times">
          <li v-for="time in times" :key="time.day">
            <span class="day">{{ time.day }}</span>
            <span v-if="time.closed">Gesloten</span>
            <span v-else>{{ time.openingHour }} – {{ time.closingHour }}</span>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const { address, phone, email, times } = useAppConfig()
</script>

<style scoped>
.footer-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 2rem;
  background: var(--primary-header-background-color);
  color: #fff;
  z-index: 100;
}

/* Layout */
.footer-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  text-align: left;
}

.footer-block p {
  margin: 0.25rem 0;
}

/* Opening times */
.opening-times {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;
}

.opening-times li {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.day {
  opacity: 0.85;
}

/* Links */
.footer-wrapper a {
  color: inherit;
  text-decoration: none;
}

.footer-wrapper a:hover {
  text-decoration: underline;
}

/* Mobile */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .opening-times li {
    justify-content: center;
    gap: 0.5rem;
  }
}
</style>
