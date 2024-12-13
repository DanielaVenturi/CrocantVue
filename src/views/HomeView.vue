<script setup>
import { onMounted } from 'vue';
import { useProdutoStore } from '@/stores/produto';

const produtoStore = useProdutoStore();

async function fetchProdutos() {
  console.log('aqui')
  await produtoStore.getProdutos();
}

onMounted(() => fetchProdutos());

</script>

<template>

  <div class="product-card-colecoes">
    <div class="product-card">
      <img src="@/assets/imagens/disney.webp" alt="Disney" />
    </div>
    <div class="product-card">
      <img src="@/assets/imagens/Star-wars.webp" alt="Star Wars" />
    </div>
    <div class="product-card">
      <img src="@/assets/imagens/shrek.jpg" alt="Shrek" />
    </div>
    <div class="product-card">
      <img src="@/assets/imagens/kitty.png" alt="Hello Kitty" />
    </div>
    <div class="product-card">
      <img src="@/assets/imagens/harry.png" alt="Harry Potter" />
    </div>
  </div>

  <div class="produto-view">

    <section class="produtos-list">
  <div v-if="produtoStore.produtos.length === 0">
    <p>Produtos não encontrados!!!</p>
  </div>
  <div v-for="produto in produtoStore.produtos" :key="produto.id" class="produto-card">
    <div class="produto-img-wrapper">
      <img :src="produto.capa.url" alt="Produto: {{ produto.nome }}" />
    </div>
    <div class="produto-nome-preco">
      <p>{{ produto.nome }}</p>
      <p class="price">R$ {{ produto.preco }}</p>
    </div>
    <button @click="$router.push({ name: 'Maisproduto', params: { id: produto.id } })">+</button>
  </div>
</section>
  </div>
</template>

<style scoped>


.product-card-colecoes {
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-evenly;
}

.product-card {
  width: 120px;
  height: 120px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;
  margin-bottom: 15px; /* Adiciona margem inferior para espaçamento entre as linhas */
}

.product-card img {
  max-width: 100%;
  max-height: 150%;
}

.product-card:hover {
  transform: scale(1.05);
}
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
  margin-bottom: 1.5rem;
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

.produtos-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.produto-card {
  background-color: #F9F2FF;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.produto-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.produto-card img {
  width: 100%;
  max-width: 150px;
  height: auto;
  margin-bottom: 1rem;
}

.produto-card p {
  margin: 0.5rem 0;
  color: #864EFF;
  font-weight: bold;
}

.produto-card .price {
  font-size: 1.2rem;
  font-weight: bold;
}

.produto-card button {
  background-color: #864EFF;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.produto-card button:hover {
  background-color: #D78FFF;
  transform: scale(1.05);
}

@media only screen and (max-width: 768px) {
  .produto-view {
    flex-direction: column;
    align-items: center;
  }

  .filter-section {
    width: 100%;
    margin-bottom: 1.5rem;
    margin-right: 0;
  }

  .produtos-list {
    grid-template-columns: 1fr;
  }
}

</style>
