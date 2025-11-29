<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="brand">
        <router-link to="/" class="brand-link">
          <img class="icon" src="@assets/Favicon.png" alt="Logo" />
          <span class="brand-text">Librería Nexus</span>
        </router-link>
      </div>

      <ul class="nav-links">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/espacios">Espacios</router-link></li>
        <!-- <li><router-link to="/checkout">Reservar</router-link></li>   -->
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  /* Cambio: Fondo blanco/crema en lugar de sólido oscuro */
  background-color: #ffffff;
  /* Opcional: Si prefieres que se funda con el fondo, usa transparent 
     pero un fondo sólido es mejor para el sticky */

  border-bottom: 1px solid var(--color-border); /* Borde beige suave */
  padding: 1rem 0;

  /* Sombra cálida definida en las variables */
  box-shadow: 0 4px 12px var(--color-shadow);

  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1200px; /* Variable --container-width */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.brand-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: opacity 0.2s;
}

.brand-link:hover {
  opacity: 0.8;
}

.brand-text {
  /* Cambio: Tipografía Serif (Merriweather) y color oscuro */
  font-family: "Merriweather", serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e1b1a; /* Casi negro, para alto contraste */
  letter-spacing: -0.5px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px; /* Un poco más de aire entre links */
  margin: 0;
  padding: 0;
}

.nav-links a {
  /* Cambio: Texto marrón oscuro en lugar de blanco transparente */
  color: var(--color-text-light); /* Marrón muted */
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 5px 0; /* Quitamos padding lateral para el efecto de subrayado */
  position: relative;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--color-secondary); /* Color cobre al pasar el mouse */
}

/* =========================================
   Estilo Activo (Replicando el estilo Angular)
   ========================================= */
.router-link-active {
  color: var(--color-primary) !important; /* Marrón Saddle */
  font-weight: 700 !important;
}

/* El subrayado con gradiente característico */
.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  /* Gradiente de Marrón a Cobre */
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 2px;
}

.icon {
  width: 32px;
  height: auto;
  /* Opcional: Si tu icono es blanco y necesitas oscurecerlo via CSS, 
     puedes usar un filtro, aunque es mejor cambiar la imagen fuente.
     filter: invert(1); */
}
</style>
