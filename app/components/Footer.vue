<template>
  <footer class="footer-wrapper">
    <div class="footer-inner">

      <!-- Brand -->
      <div class="footer-section">
        <h4>Troapel Barbershop</h4>
      </div>

      <!-- Navigation -->
      <div class="footer-section">
        <h4>Navigatie</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Diensten</a></li>
          <li><a href="/products">Producten</a></li>
          <li><a href="/about">Over ons</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <!-- Opening hours -->
      <div class="footer-section">
        <h4>Openingstijden</h4>
        <p>Ma: Gesloten</p>
        <p>Di – Vr: 09:00 – 18:00</p>
        <p>Za: 09:00 – 14:00</p>
        <p>Zo: Gesloten</p>
      </div>

      <!-- Contact -->
      <div class="footer-section">
        <h4>Contact</h4>
        <p><a href="mailto:info@troapelbarbershop.nl">info@troapelbarbershop.nl</a></p>
        <p><a href="tel:+31611859891">+31 6 11 85 98 91</a></p>

        <address class="address">
          <span>Viaductstraat 1A</span>
          <span>9561 AA Ter Apel</span>
        </address>
      </div>


    </div>
  </footer>
</template>


<script lang="ts" setup>
</script>

<style>
.footer-wrapper {
  width: 100%;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #141414, #2a2a2a);
  border-top: 1px solid rgba(255,255,255,0.05);
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.45);
  color: #e0e0e0;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

/* Sections */
.footer-section {
  flex: 1;
  min-width: 180px;
}

/* Headings */
.footer-section h4 {
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #ffffff;
}

/* Text */
.footer-section p,
.footer-section li {
  font-size: 0.85rem;
  color: #bcbcbc;
  margin: 0.25rem 0;
}

/* Links */
.footer-section a {
  color: #bcbcbc;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-section a:hover {
  color: #ffffff;
}

/* Lists */
.footer-section ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.address {
  display: flex;
  flex-direction: column;
  font-style: normal;  /* kill italic default */
  font-size: 0.85rem;
  color: #bcbcbc;
}


/* Responsive */
@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }

  .footer-section {
    width: 100%;
  }
}
</style>
