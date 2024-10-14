<script setup>
import { onMounted } from 'vue';
import { useProdutoStore } from '@/stores/produto';

import { formatDescription, formatPrice, formatTitle } from '@/helpers/format';

const produtoStore = useProdutoStore();

async function getProduto() {
  await produtoStore.getProduto();
}

onMounted(async () => {
  await getProduto();
});
</script>

<template>
  <div class="produto-list">
    <div v-if="produtoStore.produtos.length === 0">
      <p>Produtos não encontrados!!!</p>
    </div>
    <div
      v-for="produto in produtoStore.produtos"
      :key="produto.id"
      class="produto-card"
    >
      <div class="produto-img-wrapper">
        <img :src="produto.image?.url" alt="produto.name" />
        <i class="mdi mdi-heart-outline" />
      </div>
      <div class="produto-nome-preco">
        
        <p>{{ formatTitle(produto.nome) }}</p>
        <p>{{ formatPrice(produto.preco * 1) }}</p>
        
      </div>
      <div class="produto-descricao-stars">
        
        <p>{{ formatDescription(produto.descricao) }}</p>
        
        <div class="stars">
          <i class="mdi mdi-star" size="20" />
          <i class="mdi mdi-star" size="20" />
          <i class="mdi mdi-star" size="20" />
          <i class="mdi mdi-star" size="20" />
          <i class="mdi mdi-star" size="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.produto-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
}

.produto-card {
  width: 225px;
  font-family: 'Belleza', sans-serif;
}

.produto-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 0.5rem;
  padding-top: 20px;
  margin-bottom: 1rem;
  background-color: #eeeeee;
  height: 201px;
}

.produto-img-wrapper img {
  width: 153px;
  height: 170px;
  object-fit: cover;
}

.produto-nome-preco {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.produto-nome-preco p {
  font-weight: bold;
  font-size: 16px;
  color: #010101;
}

.produto-descricao-stars {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.produto-descricao-stars p {
  font-size: 12px;
  color: #535050;
}
</style>