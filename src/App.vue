<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@components/NavBar.vue";
import AppFooter from "@components/AppFooter.vue";
</script>

<style>
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fdfdfd;
}
</style>
