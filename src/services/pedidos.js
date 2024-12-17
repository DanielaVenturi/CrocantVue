import axios from 'axios';

export default class PedidoService {
  async getPedido() {
    const response = await axios.get('/pedidos/');
    return response.data.results;
  }

  async createPedido(pedido) {
    console.log("Enviando para backend:", pedido);
    return axios.post('pedidos/', pedido);
  }
  
  async atualizarPedido(pedido) {
    const response = await axios.put(`pedidos/${pedido.id}/`, pedido);
    return response.data;
  }

  async buscarUltimoPedido() {
    const response = await axios.get(`pedidos/pedido-atual/`)
    return response.data
  }

  async excluirPedido(id) {
    const response = await axios.delete(`/pedidos/${id}/`);
    return response.status === 204;
  }

  async getPedidoPorId(id) {
    const response = await axios.get(`/pedidos/${id}/`);
    return response.data;
  }
}
