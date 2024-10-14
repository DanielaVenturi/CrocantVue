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

const multipliedProducts = computed(() => {
  const multiplied = [];
  for (let i = 0; i < 10; i++) {
    multiplied.push(...products.value);
  }
  return multiplied;
});


</script>
<template>
    <div class="produto-view">
      <aside class="filter-section">
        <h2>CLOGS Ex.</h2>
        <div class="filter">
          <p>Faixa de Preço</p>
          <input type="range" min="100" max="500" v-model="priceRange" class="slider" />
          <p>Cor</p>
          <div class="color-picker">
            <div class="color-swatch" style="background-color: #FFBAD8;"></div>
          </div>
        </div>
      </aside>
  
      <section class="product-list">
        <div
          v-for="(product, index) in multipliedProducts"
          :key="index"
          class="product-card"
        >
          <img :src="product.image" alt="product" />
          <p>{{ product.name }}</p>
          <p class="price">{{ product.price }}</p>
          <router-link to="/maisproduto" >+</router-link>
        </div>
      </section>
    </div>
  </template>
  
 
  
  <style scoped>
  .produto-view {
    display: flex;
    padding: 2rem;
    margin-top: 80px;
  }

  .filter-section {
    width: 250px;
    margin-right: 2rem;
    background-color: #F9F2FF;
    padding: 1.5rem;
    border-radius: 12px;
    color: #864EFF;
  }

  .filter-section h2 {
    font-size: 2rem;
    color: #864EFF;
    margin-bottom: 1rem;
  }

  .filter p {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .slider {
    width: 100%;
    margin-bottom: 1rem;
  }

  .color-picker {
    display: flex;
    align-items: center;
  }

  .color-swatch {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 0.5rem;
    background-color: #FFBAD8;
  }

  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .product-list {
      grid-template-columns: 1fr; 
    }

  }

  .product-card {
    background-color: #F9F2FF;
    padding: 1.5rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .product-card img {
    width: 100%;
    max-width: 150px;
    height: auto;
  }

  .product-card p {
    margin: 1rem 0;
    color: #864EFF;
  }

  .product-card .price {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .product-card button {
    background-color: #864EFF;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .product-card button:hover {
    background-color: #D78FFF;
  }
</style>