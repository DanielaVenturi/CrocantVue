<script setup>
import { ref, onMounted } from 'vue';
import { useCategoriaStore } from '@/stores/categoria';
import ModalAddCategoria from '@/components/ModalAddCategoria.vue';
import { useProdutoStore } from '@/stores/produto';
import { useUploaderStore } from '@/stores/uploader';

// Instância das stores
const categoriaStore = useCategoriaStore();
const produtoStore = useProdutoStore();
const uploaderStore = useUploaderStore();

const showModal = ref(false);
const file = ref(null);
const previewImage = ref('');
const produto = ref({
  nome: '',
  descricao: '',
  categoria: '',
  image_attachment_key: '',
  preco: '',
});

// Função para upload da imagem
const uploadImage = (e) => {
  file.value = e.target.files[0];
  previewImage.value = URL.createObjectURL(file.value);
};

// Função para salvar o produto
async function save() {
  try {
    const authToken = localStorage.getItem('psg_auth_token'); 

    if (file.value) {
      produto.value.image_attachment_key = await uploaderStore.uploadImage(file.value);
    }

    if (produto.value.id) {
      await produtoStore.atualizarProduto(produto.value, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
    } else {
      await produtoStore.adicionarProduto(produto.value, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
    }

    // Resetar os valores do produto
    Object.assign(produto.value, {
      nome: '',
      descricao: '',
      categoria: '',
      image_attachment_key: '',
      preco: '',
    });

    previewImage.value = '';
    file.value = null;

    // Atualizar a lista de produtos
    await produtoStore.getProdutos();
  } catch (error) {
    console.error('Erro ao salvar produto:', error);
  }
}

// Carregar categorias ao montar o componente
onMounted(async () => {
  await categoriaStore.getCategorias();
});
</script>

<template>
  <h1>Adicionar Produto</h1>
  <form class="form">
    <div class="row-form">
      <label for="nome">Título</label>
      <input type="text" id="nome" v-model="produto.nome" />
    </div>

    <div class="row-form">
      <label for="descricao">Descrição</label>
      <textarea id="descricao" v-model="produto.descricao"></textarea>
    </div>

    <div class="row-form">
      <label for="categoria">Categoria</label>
      <div class="row">
        <select id="categoria" v-model="produto.categoria">
          <option value="" disabled>Selecione uma categoria</option>
          <option
            v-for="categoria in categoriaStore.categorias"
            :key="categoria.id"
            :value="categoria.id"
          >
            {{ categoria.nome }}
          </option>
        </select>
        <button
          type="button"
          class="btn-icon"
          @click.stop="showModal = !showModal"
        >
          +
        </button>
      </div>
    </div>

    <div class="row-form">
      <label for="image">Imagem</label>
      <div class="row">
        <input type="file" id="image" @change="uploadImage" />
        <img
          v-if="previewImage"
          :src="previewImage"
          class="previewImage"
          alt="preview"
        />
      </div>
    </div>

    <div class="row-form">
      <label for="preco">Preço</label>
      <input type="number" id="preco" v-model="produto.preco" />
    </div>

    
    <router-link class="btn salvar" to="/" @click="toggleDropdown">Adicionar</router-link>
  </form>
  <modal-add-categoria v-if="showModal" @close="showModal = !showModal" />
  
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2rem;
  color: #864EFF;;
  text-align: center;
  margin-top: 3rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
}

.row-form {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
}

input, textarea, select {
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 0.5rem;
}

textarea {
  resize: none;
  height: 100px;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: #5e2dc9;;
  box-shadow: 0 0 4px #6630da;
}

button.salvar {
  background-color:#864EFF;;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

button.salvar:hover {
  background-color: #864EFF;;
}

button.btn-icon {
  background-color: #864EFF;;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 0.3rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.btn-icon:hover {
  background-color: #864EFF;;
}

.previewImage {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid #864EFF;
  margin-top: 1rem;
}

.row {
  display: flex;
  align-items: center;
}

@media (max-width: 600px) {
  .form {
    padding: 1.5rem;
  }

  button.salvar {
    font-size: 1rem;
    padding: 0.75rem;
  }
}
</style>
