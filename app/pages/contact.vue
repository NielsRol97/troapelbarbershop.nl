<template>
  <section class="contact-page">
    <!-- Fullscreen split layout -->
    <div class="split">
      <!-- Left: info -->
      <div class="info">
        <div class="info-inner">
          <h2>TRO Apel Barbershop</h2>

          <p class="address">
            {{ address }}
          </p>

          <ul class="contact-list">
            <li>
              <span>Email</span>
              <a :href="`mailto:${email}`">{{ email }}</a>
            </li>
            <li>
              <span>Telefoon</span>
              <a :href="`tel:${phone}`">{{ phone }}</a>
            </li>
          </ul>

          <!-- Opening times -->
          <div class="opening-hours">
            <h3>Openingstijden</h3>

            <ul class="opening-times">
              <li
                v-for="time in times"
                :key="time.day"
              >
                <span class="day">{{ time.day }}</span>
                <span class="time">
                  <template v-if="time.closed">Gesloten</template>
                  <template v-else>
                    {{ time.openingHour }} – {{ time.closingHour }}
                  </template>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Right: map -->
      <div class="map">
        <iframe
          title="Google Maps locatie"
          :src="mapUrl"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
</template>


<script lang="ts" setup>
definePageMeta({
  title: 'Contact',
  path: '/contact',
})

const { address, phone, email, times } = useAppConfig()

const mapUrl = computed(() =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
)
</script>

<style scoped>
/* =========================
   Base
   ========================= */
.contact-page {
  font-family: var(--font-family-base);
  color: var(--text-primary);
}

/* =========================
   Fullscreen split layout
   ========================= */
.split {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  min-height: 100vh;
}

/* =========================
   Info panel
   ========================= */
.info {
  background: var(--background-inverse);
  color: var(--text-inverse);
  display: flex;
  align-items: center;
}

.info-inner {
  padding: 4rem 3rem;
  max-width: 560px;
}

.info h2 {
  font-size: var(--font-size-xl);
  margin-bottom: 1.25rem;
}

.address {
  font-size: var(--font-size-md);
  color: var(--color-gray-300);
  margin-bottom: 2.5rem;
}

/* =========================
   Contact list
   ========================= */
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 3rem;
}

.contact-list li {
  margin-bottom: 1.75rem;
}

.contact-list span {
  display: block;
  font-size: var(--font-size-sm);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gray-300);
  margin-bottom: 0.25rem;
}

.contact-list a {
  font-size: var(--font-size-md);
  color: var(--text-inverse);
  text-decoration: none;
  position: relative;
}

.contact-list a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.contact-list a:hover::after {
  transform: scaleX(1);
}

/* =========================
   Opening hours
   ========================= */
.opening-hours h3 {
  font-size: var(--font-size-sm);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gray-300);
  margin-bottom: 1rem;
}

.opening-times {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.opening-times li {
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-sm);
}

.opening-times .day {
  opacity: 0.85;
}

.opening-times .time {
  text-align: right;
}

/* =========================
   Map
   ========================= */
.map {
  position: relative;
}

.map iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* =========================
   Responsive
   ========================= */
@media (max-width: 900px) {
  .split {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .map {
    height: 360px;
  }

  .info-inner {
    padding: 3rem 1.5rem;
  }
}
</style>
