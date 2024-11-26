import axios from 'axios';

export default class ProdutoService {
  async getProdutos() {
    const response = await axios.get('/produtos/');
    return response.data;
  }

  async getProdutosByCategoria(categoria_id) {
    const response = await axios.get(`/produtos/?categoria__id=${categoria_id}`);
    return response.data.results;
  }

  async createProduto(produto) {
    const response = await axios.post('/produtos/', produto);
    return response.data;
  }

  async atualizarProduto(produto) {
    const response = await axios.put(`/produtos/${produto.id}/`, produto);
    return response.data;
  }
  

  async excluirProduto(id) {
    await axios.delete(`/produtos/${id}/`);
  }

  async getProdutoPorId(id) {
    const response = await axios.get(`/produtos/${id}/`);
    return response.data;
  }
}
