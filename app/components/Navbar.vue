<template>
  <nav class="nav-container">
    <div class="nav-inner">

      <!-- Logo / Brand -->
      <div class="nav-brand">
        <NuxtLink to="/">Troapel</NuxtLink>
      </div>

      <!-- Navigation -->
      <ul class="nav-links">
        <NavItem
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
        >
          {{ item.label }}
        </NavItem>
      </ul>

      <!-- Call to action -->
      <div class="nav-cta">
        <NuxtLink to="https://1kapper.nl/salons/troapel-barbershop-ter-apel/maak-een-afspraak" class="btn-book">Afspraak maken</NuxtLink>
      </div>

    </div>
  </nav>
</template>

<script lang="ts" setup>
import NavItem from '@/components/NavItem.vue'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Diensten', to: '/diensten' },
  { label: 'Producten', to: '/producten' },
  { label: 'Over ons', to: '/over-ons' },
  { label: 'Contact', to: '/contact' },
]
</script>

<style>
.nav-container {
  width: 100%;
  background: linear-gradient(135deg, #141414, #2a2a2a);
  box-shadow: 0 2px 10px rgba(0,0,0,0.4);
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand */
.nav-brand a {
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.1rem;
}

/* Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.8rem;
  margin: 0;
  padding: 0;
}

.nav-links li {
  list-style: none;
}

.nav-links a {
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem;
  position: relative;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #fff;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 1px;
  background: #fff;
  transition: width 0.2s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

/* CTA */
.btn-book {
  background: #ffffff;
  color: #111;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s ease, color 0.2s ease;
}

.btn-book:hover {
  background: #ddd;
}

/* Mobile */
@media (max-width: 768px) {
  .nav-links {
    display: none; /* next step: mobile menu */
  }
}
</style>
