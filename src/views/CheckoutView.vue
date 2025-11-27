<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Datos del formulario reactivo
const reserva = ref({
  nombre: "",
  email: "",
  fecha: "",
  hora: "",
});

const confirmarReserva = () => {
  // Simulación de envío
  if (reserva.value.nombre && reserva.value.fecha) {
    alert(
      `¡Reserva Confirmada para ${reserva.value.nombre}!\nTe esperamos en Nexus el ${reserva.value.fecha}.`
    );
    // Redirigir a home tras aceptar
    router.push("/");
  } else {
    alert("Por favor completa todos los campos.");
  }
};
</script>

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
              <input type="time" v-model="reserva.hora" required />
            </div>
          </div>

          <button type="submit" class="btn-confirm">Confirmar y Pagar</button>
        </form>
      </div>

      <div class="summary-column">
        <div class="summary-card">
          <h3>Resumen del Pedido</h3>
          <hr />
          <p><strong>Espacio:</strong> Sala Estándar (Selección)</p>
          <p><strong>Duración:</strong> 2 horas</p>
          <p><strong>Extras:</strong> WiFi Premium incluido</p>
          <hr />
          <div class="total">
            <span>Total:</span>
            <span>0.00 € (Alumnos)</span>
          </div>
        </div>
        <img
          src="https://via.placeholder.com/400x200?text=Nexus+Checkout"
          alt="Decoración"
          class="deco-img"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.checkout-layout {
  display: grid;
  grid-template-columns: 2fr 1fr; /* Columna izq más ancha */
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
}
</style>
