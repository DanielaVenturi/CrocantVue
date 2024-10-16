import axios from 'axios';

export default class ProdutoService {
  async getProdutos() {
    const response = await axios.get('/produtos/');
    return response.data.results;
  }

  async getProdutosByCategoria(categoria_id) {
    const response = await axios.get(`/produtos/?categoria__id=${categoria_id}`);
    return response.data.results;
  }

  async createProduto(produto) {
    const response = await axios.post('/produtos/', produto);
    return response.data;
  }
}