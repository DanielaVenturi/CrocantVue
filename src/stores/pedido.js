import { ref } from 'vue';
import { defineStore } from 'pinia';
import PedidoService from '@/services/pedido';

const pedidoService = new PedidoService();

export const usePedidoStore = defineStore('pedido', () => {
  const pedidos = ref([]);

  async function getPedidos() {
    try {
      const response = await pedidoService.getPedidos();
      pedidos.value = response.results;
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
    }
  }



  async function adicionarPedidos(pedido) {
    try {
      const response = await pedidoService.createPedido(pedido);
      pedidos.value.push(response); 
      await getPedidos(); 
    } catch (error) {
      console.error('Erro ao adicionar pedido:', error);
    }
  }
 

  async function atualizarPedido(pedido) {
    try {
      await pedidoService.atualizarPedido(pedido);
      await getPedidos();
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error);
    }
  }

  async function excluirPedido(id) {
    try {
      await pedidoService.excluirPedido(id);
      await getPedidos();
    } catch (error) {
      console.error('Erro ao excluir pedido:', error);
    }
  }
  async function getPedidoPorId(id) {
    try {
      const pedido = await pedidoService.getPedidoPorId(id);
      return pedido;
    } catch (error) {
      console.error('Erro ao buscar pedido por ID:', error);
    }
  }
  

  return {
    pedidos,
    getPedidos,
    adicionarPedidos,
    atualizarPedido,
    excluirPedido,
    getPedidoPorId,
  };
});
