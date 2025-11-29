<script setup>
// No se requiere lógica compleja aquí, solo presentación estática
</script>

<template>
  <div class="page-container">
    <section class="hero">
      <img class="main-img" src="@assets/libreria.jpg" alt="Librería Nexus Interior" />

      <div class="hero-content">
        <h1>Bienvenido a Nexus</h1>
        <p class="hero-text">
          Tu espacio universitario multifuncional: Libros, Café y Coworking.
        </p>
        <router-link to="/espacios" class="btn-primary"> Reservar Espacio </router-link>
      </div>
    </section>

    <section class="info-section">
      <div class="section-header">
        <h2>Nuestros Servicios</h2>
        <p class="intro-text">
          En Nexus combinamos lo mejor de una librería académica con un entorno de trabajo
          moderno. Disfruta de nuestra cafetería de especialidad mientras estudias o
          reúnete con tu equipo en nuestras salas privadas.
        </p>
      </div>

      <div class="grid-layout">
        <div class="card service-card">
          <img
            src="https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Librería"
          />
          <div class="card-content">
            <h3>Librería Técnica</h3>
            <p>
              Accede a todo el material bibliográfico necesario para tu máster y carrera
              con ediciones de lujo.
            </p>
          </div>
        </div>

        <div class="card service-card">
          <img
            src="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Coworking"
          />
          <div class="card-content">
            <h3>Zona Coworking</h3>
            <p>
              Espacios adaptados con mesas de roble, fibra óptica y silencio garantizado.
            </p>
          </div>
        </div>

        <div class="card service-card">
          <img
            src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cafetería"
          />
          <div class="card-content">
            <h3>Cafetería</h3>
            <p>
              El mejor café de grano para mantenerte activo durante tus sesiones de
              estudio.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Contenedor central de 1200px */
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* =========================================
   HERO SECTION (CORREGIDO)
   ========================================= */
.hero {
  /* Fondo estilo papel premium */
  background: linear-gradient(135deg, #ffffff 0%, #faf8f4 100%);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--color-shadow);

  /* Flexbox para alineación lado a lado */
  display: flex;
  align-items: center; /* Centra verticalmente imagen y texto */
  justify-content: space-between; /* Distribuye el espacio */
  gap: 40px; /* Espacio entre la imagen y el texto */

  padding: 40px; /* Padding interno del contenedor */
  margin-bottom: 60px;
  text-align: left; /* Reseteamos alineación general */
}

.main-img {
  /* Tamaño controlado de la imagen */
  width: 400px;
  height: 320px; /* Altura fija para mantener proporción de tarjeta */
  object-fit: cover; /* Recorta la imagen si no encaja, sin deformar */
  border-radius: 12px;
  flex-shrink: 0; /* Evita que la imagen se aplaste si falta espacio */
  box-shadow: 0 8px 16px rgba(139, 69, 19, 0.2); /* Sombra suave a la imagen */
}

.hero-content {
  flex: 1; /* Toma el espacio restante */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido (texto y botón) horizontalmente */
  text-align: center; /* Centra el texto */
}

.hero h1 {
  font-family: "Merriweather", serif;
  color: #1e1b1a;
  font-size: 3rem; /* Ajustado ligeramente */
  margin-bottom: 16px;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.hero-text {
  font-size: 1.15rem;
  color: var(--color-text-light);
  max-width: 500px; /* Limita el ancho del párrafo para que sea legible */
  margin: 0 auto 32px auto;
  line-height: 1.6;
}

/* =========================================
   BOTÓN PRIMARY
   ========================================= */
.btn-primary {
  display: inline-block;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  padding: 12px 32px;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 10px rgba(139, 69, 19, 0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(139, 69, 19, 0.35);
  filter: brightness(1.1);
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px auto;
}

.section-header h2 {
  font-family: "Merriweather", serif;
  font-size: 2.5rem;
  color: #1e1b1a;
  border-bottom: 3px solid var(--color-accent);
  display: inline-block;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.intro-text {
  font-size: 1.1rem;
  color: var(--color-text-light);
  line-height: 1.8;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  background: #ffffff;
  border: 2px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px var(--color-shadow), 0 2px 4px rgba(139, 69, 19, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px var(--color-shadow);
  border-color: var(--color-primary);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid var(--color-border);
}

.card-content {
  padding: 20px;
}

.card h3 {
  font-family: "Merriweather", serif;
  color: var(--color-primary);
  margin-bottom: 10px;
  font-size: 1.4rem;
}

.card p {
  font-size: 0.95rem;
  color: var(--color-text-main);
  line-height: 1.6;
  margin: 0;
}
</style>
