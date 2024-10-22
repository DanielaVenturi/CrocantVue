
import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import ProdutoService from '@/services/produto';

const produtoService = new ProdutoService();

export const useProdutoStore = defineStore('produto', () => {
  const produtos = ref([]);

  async function getProduto() {
    try {
      const response = await produtoService.getProduto(); 
      produtos.value = response.results; 
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  async function getProdutosByCategoria(categoria_id) {
    produtos.value = await produtoService.getProdutosByCategoria(categoria_id);
  }

  async function createProdutos(produto) {
    await produtoService.createProdutos(produto);
    getProduto();
  }

  async function buscarTodosOsProdutos() {
    const { data } = await axios.get("/produtos/");
    return data.results;
  }

  async function adicionarProduto(produto) {
    const { data } = await axios.post("/produtos/", produto);
    return data.results;
  }

  async function atualizarProduto(produto) {
    const { data } = await axios.put(`/produtos/${produto.id}/`, produto);
    return data.results;
  }

  async function excluirProduto(id) {
    const { data } = await axios.delete(`/produtos/${id}/`);
    return data.results;
  }

  return { produtos, createProdutos, getProduto, getProdutosByCategoria, buscarTodosOsProdutos, adicionarProduto, atualizarProduto, excluirProduto };
});