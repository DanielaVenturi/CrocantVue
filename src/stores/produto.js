import { ref } from 'vue';
import { defineStore } from 'pinia';

import ProdutoService from '@/services/produto';
const produtoService = new ProdutoService();

export const useProdutoStore = defineStore('produto', () => {
  const produtos = ref([]);

  async function getProduto() {
    produtos.value = await produtoService.getProduto();
  }

  async function getProdutosByCategoria(categoria_id) {
    produtos.value = await produtoService.getProdutosByCategoria(categoria_id);
  }

  async function createProdutos(produto) {
    await produtoService.createProdutos(produto);
    getProduto();
  }

  return { produtos, createProdutos, getProduto, getProdutosByCategoria };
});