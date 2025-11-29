<template>
  <div class="page-container">
    <h1>Finalizar Reserva</h1>

    <div class="checkout-layout">
      <div class="form-column">
        <h2>Tus Datos</h2>
        <form @submit.prevent="confirmarReserva">
          <div class="form-group">
            <label>Nombre Completo</label>
            <input type="text" v-model="reserva.nombre" required />
          </div>

          <div class="form-group">
            <label>Email Universitario</label>
            <input
              type="email"
              v-model="reserva.email"
              placeholder="@universidad.edu"
              required
            />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Fecha</label>
              <input type="date" v-model="reserva.fecha" required />
            </div>
            <div class="form-group">
              <label>Hora de entrada</label>
              <input type="time" v-model="reserva.hora_entrada" required />
            </div>
            <div class="form-group">
              <label>Hora de salida</label>
              <input type="time" v-model="reserva.hora_salida" required />
            </div>
          </div>

          <button type="submit" class="btn-confirm">Confirmar y Pagar</button>
        </form>
      </div>

      <div class="summary-column">
        <div class="summary-card" v-if="espacioSeleccionado">
          <h3>Resumen del Pedido</h3>
          <hr />
          <p><strong>Espacio:</strong> {{ espacioSeleccionado.nombre }}</p>
          <p><strong>Planta:</strong> {{ espacioSeleccionado.planta }}</p>
          <p><strong>Capacidad:</strong> {{ espacioSeleccionado.capacidad }} personas</p>
          <p>
            <strong>Precio por hora:</strong> {{ espacioSeleccionado.price || "0.00" }}€
          </p>
          <hr />
          <div class="total">
            <span>Precio total:</span>
            <span>{{ precioTotal || "0.00" }} €</span>
          </div>
        </div>

        <img
          v-if="espacioSeleccionado"
          :src="espacioSeleccionado.img"
          alt="Imagen de la sala"
          class="deco-img"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, type Ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import type { Reserva } from "@shared/interfaces";
import { spacesData } from "@/shared/data";

const router = useRouter();
const route = useRoute();

// 1. Buscamos la sala basada en el ID de la URL
const espacioSeleccionado = computed(() => {
  const idFromUrl = Number(route.query.id);
  return spacesData.find((s) => s.id === idFromUrl);
});

// Datos del formulario
const reserva: Ref<Reserva> = ref({} as Reserva);

// Validación al cargar: Si alguien entra directo sin elegir sala, lo devolvemos
onMounted(() => {
  if (!espacioSeleccionado.value) {
    alert("Por favor selecciona una sala primero.");
    router.push("/espacios");
  }
});

const precioTotal = computed(() => {
  if (
    !espacioSeleccionado.value ||
    !reserva.value.hora_entrada ||
    !reserva.value.hora_salida
  ) {
    return "0.00";
  }

  // [Jose] Se pone valor inicial = 0 para evitar que tenga valor undefined
  const [hInicio = 0, mInicio = 0] = reserva.value.hora_entrada.split(":").map(Number);
  const [hFin = 0, mFin = 0] = reserva.value.hora_salida.split(":").map(Number);

  const inicioTotalMinutos = hInicio * 60 + mInicio;
  const finTotalMinutos = hFin * 60 + mFin;

  const diferenciaMinutos = finTotalMinutos - inicioTotalMinutos;

  if (diferenciaMinutos <= 0) return "0.00";
  const horasTotales = diferenciaMinutos / 60;
  const precioFinal = horasTotales * espacioSeleccionado.value.price;

  return precioFinal.toFixed(2);
})

const confirmarReserva = () => {
  if (reserva.value.nombre && reserva.value.fecha && espacioSeleccionado.value) {
    alert(
      `¡Reserva Confirmada!\n` +
        `Sala: ${espacioSeleccionado.value.nombre}\n` +
        `Precio: ${espacioSeleccionado.value.price}€`
    );
    router.push("/");
  } else {
    alert("Por favor completa todos los campos.");
  }
};
</script>

<style scoped>
/* Tus estilos se mantienen igual */
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.checkout-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-row {
  display: flex;
  gap: 20px;
}
.btn-confirm {
  width: 100%;
  padding: 15px;
  background-color: #6f42c1;
  color: white;
  border: none;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}
.summary-card {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}
.total {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 15px;
  color: #28a745;
}
.deco-img {
  width: 100%;
  margin-top: 20px;
  border-radius: 8px;
  opacity: 0.8;
  object-fit: cover;
}
</style>
