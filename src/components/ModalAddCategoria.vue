<script setup>
import { reactive, defineEmits, } from 'vue';
import { useCategoriaStore } from '@/stores/categoria';

const emit = defineEmits(['close']);

const categoriaStore = useCategoriaStore();

const categorias = reactive({
  nome: '',
 
});

const createCategoria = async () => {
  await categoriaStore.createCategoria(categorias);
  emit('close');
};

onMounted(async () => {
  categorias.value = await categoriasApi.buscarTodasAsCategorias()
})

function limpar() {
  Object.assign(categoria, { ...defaultCategoria })
}

async function salvar() {
  if (categoria.id) {
    await categoriasApi.atualizarCategoria(categoria)
  } else {
    await categoriasApi.adicionarCategoria(categoria)
  }
  categorias.value = await categoriasApi.buscarTodasAsCategorias()
  limpar()
}

function editar(categoria_para_editar) {
  Object.assign(categoria, categoria_para_editar)
}

async function excluir(id) {
  await categoriasApi.excluirCategoria(id)
  categorias.value = await categoriasApi.buscarTodasAsCategorias()
  limpar()
}

</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Adicionar Categoria</h2>
        <button @click="$emit('close')" class="btn-close">
          <i class="mdi mdi-close"/>
        </button>
      </div>
      <form class="form" @submit.prevent="createCategoria">
        <div class="row-form">
          <label for="nome">Nome</label>
          <input type="text" id="nome" v-model="categorias.nome" />
        </div>
        <div class="row-form">
          <label for="icon">Ícone</label>
          <input type="text" id="icon" v-model="categorias.icon" />
        </div>
        <button class="btn-send" type="submit">Adicionar</button>
      </form>
    </div>
  </div>

  <h1 class="titulo-categoria">Categoria</h1>

<div class="categoria">
  <div class="form-section">
    <input
      type="text"
      v-model="categoria.descricao"
      placeholder="Descrição"
      class="input-field"
    />
    <button @click="salvar" class="btn salvar">Salvar</button>
    <button @click="limpar" class="btn limpar">Limpar</button>
  </div>

  <div class="list-section">
    <ul class="categoria-list">
      <li v-for="categoria in categorias" :key="categoria.id" class="categoria-item">
        <span @click="editar(categoria)" class="categoria-text">
          ({{ categoria.id }}) - {{ categoria.descricao }} -
        </span>
        <button @click="excluir(categoria.id)" class="btn-delete">x</button>
      </li>
    </ul>
  </div>
</div>
</template>

<style scoped>

.modal {
  position: fixed;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
 
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 30%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:80px;
}

.modal-header h2 {
  font-size: 1.5rem;
}

.btn-close {
  background-color: #0a2668;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.btn-close i {
  font-size: 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.row-form {
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
}

.form button.btn-send {
  background-color: #0a2668;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  width: 200px;
}
</style>