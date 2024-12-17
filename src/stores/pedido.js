import { ref } from 'vue';
import { defineStore } from 'pinia';
import PedidoService from '@/services/pedidos';

const pedidoService = new PedidoService();

export const usePedidoStore = defineStore('pedido', () => {
  const pedidos = ref([]);
  const pedidoAtual = ref([])

  async function getPedidos() {
    try {
      pedidos.value = await pedidoService.getPedido();
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
    }
  }

  async function adicionarPedidos(pedido) {
    try {
      const novoPedido = await pedidoService.createPedido(pedido);
      pedidos.value.push(novoPedido);
    } catch (error) {
      console.error('Erro ao adicionar pedido:', error);
    }
  }

  async function buscarUltimoPedido() {
    try {
      pedidoAtual.value = await pedidoService.buscarUltimoPedido();
    } catch (error) {
      console.error('Erro ao buscar último pedido:', error)
    }
  }

  async function atualizarPedido(pedido) {
    try {
      await pedidoService.atualizarPedido(pedido);
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error);
    }
  }

  async function excluirPedido(id) {
    try {
      const sucesso = await pedidoService.excluirPedido(id);
      if (sucesso) {
        pedidos.value = pedidos.value.filter((pedido) => pedido.id !== id); 
      }
    } catch (error) {
      console.error('Erro ao excluir pedido:', error);
    }
  }

  async function getPedidoPorId(id) {
    try {
      return await pedidoService.getPedidoPorId(id);
    } catch (error) {
      console.error('Erro ao buscar pedido por ID:', error);
    }
  }

  const incrementar = (produto) => {
    produto.quantidade += 1;
  };

  const decrementar = (produto) => {
    if (produto.quantidade > 0) {
      produto.quantidade -= 1;
    }
  };

  return {
    pedidos,
    pedidoAtual,
    getPedidos,
    adicionarPedidos,
    atualizarPedido,
    excluirPedido,
    getPedidoPorId,
    incrementar,
    decrementar,
    buscarUltimoPedido,
  };
});
