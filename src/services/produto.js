import axios from 'axios';
// import { useAuthStore } from '@/stores/auth';


export default class ProdutoService {
  async getProdutos() {
    // const authStore = useAuthStore();
    // const authToken = authStore.getToken(); // Pega o token do store
    const response = await axios.get('/produtos/', {
      // headers: {
      //   Authorization: `Bearer ${authToken}`, // Adiciona o token no cabeçalho
      // },
    });
    return response.data;
  }

  async getProdutosByCategoria(categoria_id) {
    // const authStore = useAuthStore();

    // const authToken = authStore.getToken();
    const response = await axios.get(`/produtos/?categoria__id=${categoria_id}`, {
      // headers: {
      //   Authorization: `Bearer ${authToken}`,
      // },
    });
    return response.data.results;
  }

  async createProduto(produto) {
    // const authStore = useAuthStore();

    // const authToken = authStore.getToken();
    const response = await axios.post('/produtos/', produto, {
      // headers: {
      //   Authorization: `Bearer ${authToken}`,
      // },
    });
    return response.data;
  }
}