<script setup>
import { onMounted, ref } from 'vue';
import { useProdutoStore } from '@/stores/produto';

const produtoStore = useProdutoStore();

async function fetchProdutos() {
  await produtoStore.getProdutos();
}

onMounted(() => fetchProdutos());
</script>

<template>
  <div class="carrinho">
    <header>
      <h1>Produtos</h1>
    </header>
    <section class="produtos-list">
      <div v-if="produtoStore.produtos.length === 0" class="mensagem">
        <p>Produtos não encontrados!!!</p>
      </div>
      <div v-for="produto in produtoStore.produtos" :key="produto.id" class="produto-item">
        <div class="produto-info">
          <div class="produto-imagem">
            <img :src="produto.capa.url" alt="Imagem do {{ produto.nome }}" />
          </div>
          <div class="produto-detalhes">
            <p 
              class="produto-nome" 
              @click="$router.push({ name: 'Maisproduto', params: { id: produto.id } })"
            >
              {{ produto.nome }}
            </p>
            <p class="preco">R$ {{ produto.preco }}</p>
          </div>
        </div>
        <div class="produto-quantidade">
          <span>Quantidade</span>
          <div class="quantidade-controle">
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </section>
    <footer class="acoes">
      <button>Selecionar Tudo</button>
      <button>Excluir</button>
      <button>Continuar</button>
    </footer>
  </div>
</template>

<style scoped>
.carrinho {
  background-color: #f4eeff;
  border-radius: 20px;
  padding: 2rem;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

header h1 {
  text-align: center;
  font-size: 2rem;
  color: #864eff;
  margin-bottom: 1.5rem;
}

.produtos-list {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.produto-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
}

.produto-item:last-child {
  border-bottom: none;
}

.produto-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.produto-imagem img {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: #dcdcdc;
}

.produto-detalhes {
  display: flex;
  flex-direction: column;
}

.produto-detalhes .produto-nome {
  margin: 0;
  color: #864eff;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
}

.produto-detalhes .produto-nome:hover {
  color: #d78fff;
}

.produto-detalhes .preco {
  color: #864eff;
  font-weight: bold;
}

.produto-quantidade {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.quantidade-controle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantidade-controle button {
  background-color: #864eff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.quantidade-controle button:hover {
  background-color: #d78fff;
}

.acoes {
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
}

.acoes button {
  background-color: #864eff;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.acoes button:hover {
  background-color: #d78fff;
  transform: translateY(-2px);
}
</style>
