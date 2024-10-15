import { ref } from 'vue';
import { defineStore } from 'pinia';

import CategoriaService from '@/services/categoria';
const categoriaService = new CategoriaService();

export const useCategoriaStore = defineStore('categoria', () => {
  const categorias = ref([]);

  async function getCategorias() {
    categorias.value = await categoriaService.getCategorias();
  }

  async function createCategoria(categoria) {
    await categoriaService.createCategoria(categoria);
    getCategorias();
  }
  async function buscarTodasAsCategorias() {
    const { data } = await axios.get("/categorias/");
    return data.results;
  }
  async function adicionarCategoria(categoria) {
    const { data } = await axios.post("/categorias/", categoria);
    return data.results;
  }
  async function atualizarCategoria(categoria) {
    const { data } = await axios.put(`/categorias/${categoria.id}/`, categoria);
    return data.results;
  }
  async function excluirCategoria(id) {
    const { data } = await axios.delete(`/categorias/${id}/`);
    return data.results;
  }

  return { categorias, getCategorias, createCategoria, buscarTodasAsCategorias, adicionarCategoria, atualizarCategoria, excluirCategoria };

});