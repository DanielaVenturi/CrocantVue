<script setup>
import { onMounted, reactive, ref } from 'vue';
import ModalAddCategoria from '@/components/ModalAddCategoria.vue';
import { useCategoriaStore } from '@/stores/categoria';
import { useProdutoStore } from '@/stores/produto';
import { useUploaderStore } from '@/stores/uploader';

const categoriaStore = useCategoriaStore();
const produtoStore = useProdutoStore();
const uploaderStore = useUploaderStore();

const showModal = ref(false);
const file = ref(null);
const previewImage = ref('');

const produto = reactive({
  nome: '',
  descricao: '',
  categoria: '',
  image_attachment_key: '',
  preco: '',
});

const uploadImage = (e) => {
  file.value = e.target.files[0];
  previewImage.value = URL.createObjectURL(e.target.files[0]);
};

async function save() {
  if (file.value) {
    produto.image_attachment_key = await uploaderStore.uploadImage(file.value);
  }

  if (produto.id) {
    await produtoStore.atualizarProduto(produto);
  } else {
    await produtoStore.adicionarProduto(produto);
  }

  Object.assign(produto, {
    nome: '',
    descricao: '',
    categoria: '',
    image_attachment_key: '',
    preco: '',
  });

  await produtoStore.getProduto();
}

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
        <button type="button" class="btn-icon" @click.stop="showModal = !showModal">+</button>
      </div>
    </div>
    <div class="row-form">
      <label for="image">Imagem</label>
      <div class="row">
        <input type="file" id="image" @change="uploadImage" />
        <img v-if="previewImage" :src="previewImage" class="previewImage" alt="preview" />
      </div>
    </div>
    <div class="row-form">
      <label for="preco">Preço</label>
      <input type="number" id="preco" v-model="produto.preco" />
    </div>
    <!-- O botão agora usa @click.prevent -->
    <button type="button" @click.prevent="save" class="btn salvar">Adicionar</button>
  </form>
  <modal-add-categoria v-if="showModal" @close="showModal = !showModal" />
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 2rem;
}

.row-form {
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  max-width: 400px;
}

.form button.salvar {
  background-color: #0a2668;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  width: 200px;
}

.form button.btn-icon {
  background-color: #0a2668;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 0.3rem;
  font-size: 1rem;
  cursor: pointer;
}

.previewImage {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #0a2668;
  padding: 0.1rem;
}
</style>
