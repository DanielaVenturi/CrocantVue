import { ref } from 'vue';
import { defineStore } from 'pinia';
import ProdutoService from '@/services/produto';

const produtoService = new ProdutoService();

export const useProdutoStore = defineStore('produto', () => {
  const produtos = ref([]);

  async function getProdutos() {
    try {
      const response = await produtoService.getProdutos();
      produtos.value = response.results;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  async function getProdutosByCategoria(categoria_id) {
    try {
      produtos.value = await produtoService.getProdutosByCategoria(categoria_id);
    } catch (error) {
      console.error('Erro ao buscar produtos por categoria:', error);
    }
  }

  async function adicionarProduto(produto) {
    try {
      const response = await produtoService.createProduto(produto);
      produtos.value.push(response); // Adiciona o novo produto à lista
      await getProdutos(); // Atualiza a lista de produtos
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  }

  async function atualizarProduto(produto) {
    try {
      await produtoService.atualizarProduto(produto);
      await getProdutos(); // Atualiza a lista de produtos
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  }

  async function excluirProduto(id) {
    try {
      await produtoService.excluirProduto(id);
      await getProdutos(); // Atualiza a lista de produtos após exclusão
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  }

  return {
    produtos,
    getProdutos,
    getProdutosByCategoria,
    adicionarProduto,
    atualizarProduto,
    excluirProduto,
  };
});
