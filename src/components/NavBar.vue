<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="brand">
        <router-link to="/" class="brand-link">
          <span class="icon">📚</span> Nexus
        </router-link>
      </div>

      <ul class="nav-links">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/espacios">Espacios</router-link></li>
        <li><router-link to="/checkout">Reservar</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  background-color: #6f42c1; /* Púrpura corporativo Nexus */
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky; /* Se queda fijo al hacer scroll */
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.brand-link {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  padding: 5px 10px;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: white;
}

/* Clase automática de Vue Router para el enlace activo */
.router-link-active {
  color: #fff !important;
  border-bottom: 2px solid #a4febd; /* Subrayado verde lima */
}
</style>
