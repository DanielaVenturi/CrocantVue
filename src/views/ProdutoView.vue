<script setup>
import { ref, computed } from 'vue';

const priceRange = ref(287);
const products = ref([
  {
    name: 'Sandália Crocs Bayaband Clog BALLERINA PINK/ CANDY PINK',
    price: 'R$ 287,10',
    image: '/src/assets/imagens/Frame6.png',
  },

]);
const width = ref(window.innerWidth)

const multipliedProducts = computed(() => {
  const multiplied = [];
  for (let i = 0; i < 10; i++) {
    multiplied.push(...products.value);
  }
  return multiplied;
});
// ARRUMAR; colocar o filter-section na parte esquerda da tela em telas grandes :)

</script>
<template>

      <h2>CLOGS Ex.</h2>
      <div class="filter">
        <p>Faixa de Preço</p>
        <input type="range" min="100" max="500" v-model="priceRange" class="slider" />
