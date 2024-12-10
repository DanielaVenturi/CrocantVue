import axios from 'axios';

export default class PedidoService {
  async getPedido() {
    const response = await axios.get('/pedidos/');
    return response.data.results;
  }

  async createPedidos() {
    const response = await axios.post('/pedidos/');
    return response.data;
  }
  async atualizarPedido(pedido) {
    const response = await axios.put(`/pedidos/${pedido.id}/`, pedido);
    return response.data;
  }
}