<template>
  <div class="page-container">
    <h1>Reserva tu Espacio</h1>
    <p>Selecciona el entorno ideal para tu trabajo hoy.</p>

    <div class="filters">
      <div class="filter-group">
        <label>Planta:</label>
        <select v-model="filtroPlanta">
          <option value="todas">Todas las plantas</option>
          <option value="1">Planta 1 (Silencio)</option>
          <option value="2">Planta 2 (Grupos)</option>
        </select>
      </div>

      <div class="filter-group">
        <label>Capacidad mínima:</label>
        <input
          type="number"
          v-model="filtroCapacidad"
          min="1"
          placeholder="Ej. 4 personas"
        />
      </div>
    </div>

    <div class="spaces-grid">
      <div
        v-for="espacio in espaciosFiltrados"
        :key="espacio.id"
        class="space-card"
      >
        <img :src="espacio.img" :alt="espacio.nombre" />
        <div class="card-body">
          <h3>{{ espacio.nombre }}</h3>
          <ul>
            <li><strong>Planta:</strong> {{ espacio.planta }}</li>
            <li><strong>Capacidad:</strong> {{ espacio.capacidad }} pers.</li>
          </ul>
          <router-link to="/checkout" class="btn-book">Reservar</router-link>
        </div>
      </div>
    </div>

    <p v-if="espaciosFiltrados.length === 0">
      No hay espacios disponibles con estos filtros.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
// Importamos la interfaz y los datos desde shared
import { spacesData } from "@/shared/data"; // O usa ruta relativa si no configuraste el alias
import type { Space } from "@/shared/interfaces";

// AHORA: Usamos el tipo estricto Space[] en lugar de any[]
// Inicializamos la referencia con los datos importados
const espacios = ref<Space[]>(spacesData);

// Estado para los filtros
const filtroPlanta = ref<string>("todas");
const filtroCapacidad = ref<number | string>(""); // Puede ser string vacío al inicio

// Lógica de filtrado (Computed)
// TypeScript ahora sabe que 'espacio' es de tipo 'Space' automáticamente inside del filter
const espaciosFiltrados = computed(() => {
  return espacios.value.filter((espacio) => {
    const coincidePlanta =
      filtroPlanta.value === "todas" ||
      espacio.planta === Number(filtroPlanta.value);
    // Convertimos a number para asegurar la comparación correcta
    const coincideCapacidad =
      !filtroCapacidad.value ||
      espacio.capacidad >= Number(filtroCapacidad.value);
    return coincidePlanta && coincideCapacidad;
  });
});
</script>

<style scoped>
.page-container {
  max-width: 1200px; /* Cumpliendo requisito de ancho */
  margin: 0 auto;
  padding: 20px;
}

.filters {
  background: #eee;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.spaces-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
}

.space-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.space-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 15px;
}

.btn-book {
  display: block;
  background-color: #28a745;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 10px;
}
</style>
