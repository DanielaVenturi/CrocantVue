<script setup>
import { onMounted } from 'vue';
import { useProdutoStore } from '@/stores/produto';

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
        <img :src="produto.capa.url" alt="Produto: {{ produto.nome }}" />
        <i class="mdi mdi-heart-outline" />
      </div>
      <div class="produto-nome-preco">
        <p>{{ produto.nome }}</p>
        <p>{{ produto.preco }}</p>
      </div>
      <div class="produto-descricao-stars">
        <p>{{ produto.descricao }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
