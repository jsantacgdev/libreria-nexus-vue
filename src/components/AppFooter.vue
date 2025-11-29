<script setup lang="ts">
// Solo contenido estático
const currentYear: number = new Date().getFullYear();
</script>

<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4 class="brand-font">Nexus Universitario</h4>
        <p>Espacios de coworking y librería técnica para estudiantes.</p>
      </div>

      <div class="footer-section">
        <p class="copyright">
          &copy; {{ currentYear }} Nexus Project. Todos los derechos reservados.
        </p>
        <div class="legal-links">
          <a href="#">Aviso Legal</a>
          <span class="separator">|</span>
          <a href="#">Política de Privacidad</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background: linear-gradient(180deg, var(--color-primary), #5e2f0d);
  color: #f5f1e8;
  padding: 40px 0;
  margin-top: 60px;

  border-top: 5px solid var(--color-accent);
  box-shadow: 0 -4px 20px rgba(139, 69, 19, 0.15);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

h4 {
  margin: 0 0 12px 0;
  font-family: "Merriweather", serif;
  color: var(--color-accent);
  font-size: 1.25rem;
  letter-spacing: 0.5px;
}

p {
  margin: 5px 0;
  font-size: 0.95rem;
  color: rgba(255, 248, 240, 0.85);
  font-family: "Inter", sans-serif;
}

.copyright {
  font-size: 0.85rem;
  opacity: 0.7;
}

.legal-links {
  margin-top: 5px;
}

.separator {
  color: var(--color-accent);
  margin: 0 8px;
  opacity: 0.5;
}

.legal-links a {
  color: rgba(255, 248, 240, 0.7);
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  font-weight: 500;
}

.legal-links a:hover {
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
