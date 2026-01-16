<template>
  <footer class="footer-wrapper">
    <div class="footer-inner">
      <div class="footer-grid">
        <!-- Contact -->
        <div class="footer-block">
          <Title
            :title="{
              heading: 'h3',
              text: 'Troapel Barbershop'
            }"
          />

          <Text
            :text="{
              type: 'p',
              content: address
            }"
          />

          <Text
            :text="{
              type: 'p',
              content: phone
            }"
          />

          <Text
            :text="{
              type: 'p',
              content: email
            }"
          />
        </div>

        <!-- Opening hours -->
        <div class="footer-block">
          <Title
            :title="{
              heading: 'h3',
              text: 'Openingstijden'
            }"
          />

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

      <div class="footer-bottom">
        <Text
          :text="{
            type: 'small',
            content: `© ${new Date().getFullYear()} Troapel Barbershop`
          }"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const { address, phone, email, times } = useAppConfig()
</script>

<style scoped>
.footer-wrapper {
  background: var(--header-background);
  color: var(--text-inverse);
}


/* Inner container */
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 1.5rem;
}

/* Grid */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

/* Blocks */
.footer-block {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Titles from component */
.footer-block :deep(.title) {
  color: var(--text-inverse);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* Text from component */
.footer-block :deep(.text) {
  color: var(--text-inverse);
  font-size: 0.95rem;
  opacity: 0.9;
}

/* Opening times */
.opening-times {
  color: var(--text-inverse);
  opacity: 0.85;
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.opening-times li {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.day {
  opacity: 0.85;
}

.time {
  text-align: right;
}

/* Bottom bar */
.footer-bottom {
  margin-top: 3rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);

  text-align: center;
  opacity: 0.7;
}

/* Mobile */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .opening-times li {
    justify-content: center;
    gap: 0.5rem;
  }

  .time {
    text-align: center;
  }
}
</style>
