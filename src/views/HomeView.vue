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
      <img src="@/assets/imagens/Shrek.png" alt="Shrek" />
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
/* Container principal para coleções */
.product-card-colecoes {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem; /* Espaço entre os cards */
  padding: 20px;
  margin-top:50px;
 
}

/* Estilo dos cards das coleções */
.product-card {
  width: 150px;
  height: 150px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain; /* Ajusta a imagem dentro do card */
  border-radius: 10px; /* Bordas arredondadas */
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Layout da visualização de produtos */
.produto-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 2rem;
}

/* Lista de produtos */
.produtos-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

/* Estilo dos cards de produtos */
.produto-card {
  background-color: #f9f2ff;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  width: 200px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.produto-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

/* Imagens dos produtos */
.produto-card img {
  width: 100%;
  max-width: 150px;
  height: auto;
  margin-bottom: 1rem;
}

/* Nome e preço dos produtos */
.produto-card p {
  margin: 0.5rem 0;
  color: #864eff;
  font-weight: bold;
}

.produto-card .price {
  font-size: 1.2rem;
  font-weight: bold;
}

/* Botão adicionar produto */
.produto-card button {
  background-color: #864eff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.produto-card button:hover {
  background-color: #d78fff;
  transform: scale(1.05);
}

/* Responsividade */
@media only screen and (max-width: 768px) {
  .product-card-colecoes {
    flex-direction: column;
    align-items: center;
  }

  .produtos-list {
    grid-template-columns: 1fr;
  }
}
</style>

