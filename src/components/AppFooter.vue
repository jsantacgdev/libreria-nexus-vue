<script setup lang="ts">
// Solo contenido estático
const currentYear: number = new Date().getFullYear();
</script>

<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Nexus Universitario</h4>
        <p>Espacios de coworking y librería técnica para estudiantes.</p>
      </div>

      <div class="footer-section">
        <p>
          &copy; {{ currentYear }} Nexus Project. Todos los derechos reservados.
        </p>
        <div class="legal-links">
          <a href="#">Aviso Legal</a> | <a href="#">Política de Privacidad</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background-color: #343a40; /* Gris oscuro elegante */
  color: #f8f9fa;
  padding: 30px 0;
  margin-top: 50px; /* Separación del contenido principal */
  border-top: 4px solid #6f42c1; /* Línea de color corporativo */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h4 {
  margin: 0 0 10px 0;
  color: #a4febd; /* Verde lima suave para títulos oscuros */
}

p {
  margin: 5px 0;
  font-size: 0.9rem;
  color: #ccc;
}

.legal-links a {
  color: #ccc;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s;
}

.legal-links a:hover {
  color: white;
  text-decoration: underline;
}
</style>
