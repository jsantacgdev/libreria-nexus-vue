<script setup>
// No se requiere lógica compleja aquí, solo presentación estática
</script>

<template>
  <div class="page-container">
    <section class="hero">
      <div class="hero-content">
        <h1>Bienvenido a Nexus</h1>
        <p>
          Tu espacio universitario multifuncional: Libros, Café y Coworking.
        </p>
        <router-link to="/espacios" class="btn-primary"
          >Reservar Espacio</router-link
        >
      </div>
    </section>

    <section class="info-section">
      <h2>Nuestros Servicios</h2>
      <p class="intro-text">
        En Nexus combinamos lo mejor de una librería académica con un entorno de
        trabajo moderno. Disfruta de nuestra cafetería de especialidad mientras
        estudias o reúnete con tu equipo en nuestras salas privadas.
      </p>

      <div class="grid-layout">
        <div class="card">
          <img
            src="https://via.placeholder.com/400x250/6f42c1/ffffff?text=Libreria"
            alt="Librería"
          />
          <h3>Librería Técnica</h3>
          <p>
            Accede a todo el material bibliográfico necesario para tu máster y
            carrera.
          </p>
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/400x250/28a745/ffffff?text=Coworking"
            alt="Coworking"
          />
          <h3>Zona Coworking</h3>
          <p>
            Espacios adaptados con fibra óptica, pizarras y silencio
            garantizado.
          </p>
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/400x250/e0a800/ffffff?text=Cafeteria"
            alt="Cafetería"
          />
          <h3>Cafetería</h3>
          <p>
            El mejor café para mantenerte activo durante tus sesiones de
            estudio.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Contenedor central de 1200px requerido */
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  background-color: #f4f4f4;
  text-align: center;
  padding: 60px 20px;
  margin-bottom: 40px;
  border-radius: 8px;
}

.hero h1 {
  color: #6f42c1; /* Color corporativo Nexus */
  font-size: 3rem;
  margin-bottom: 10px;
}

.btn-primary {
  display: inline-block;
  background-color: #6f42c1;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.card img {
  width: 100%;
  border-radius: 5px;
}
</style>
