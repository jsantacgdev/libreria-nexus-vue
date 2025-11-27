<script setup>
import { defineProps } from "vue";

// Definimos las propiedades que recibirá este componente desde el padre
const props = defineProps({
  nombre: String,
  planta: Number,
  capacidad: Number,
  img: String,
});
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img :src="img" :alt="nombre" />
      <span class="badge">P{{ planta }}</span>
    </div>

    <div class="card-content">
      <h3>{{ nombre }}</h3>
      <div class="features">
        <span>👥 Cap: {{ capacidad }}</span>
        <span>📶 WiFi 6</span>
      </div>
      <router-link to="/checkout" class="btn-reservar">Seleccionar</router-link>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  height: 200px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #28a745; /* Verde éxito */
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.card-content {
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-content h3 {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  color: #333;
}

.features {
  display: flex;
  gap: 15px;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.btn-reservar {
  display: block;
  background-color: #6f42c1;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
}

.btn-reservar:hover {
  background-color: #553098;
}
</style>
