<script setup>
import { onMounted, computed } from 'vue';
import { useProdutoStore } from '@/stores/produto';

const produtoStore = useProdutoStore();

// IDs que você quer filtrar
const filteredIds = [1]; // Substitua pelos IDs desejados

async function fetchProdutos() {
  await produtoStore.getProdutos();
}

onMounted(() => fetchProdutos());

// Computed property que retorna apenas os produtos com os IDs desejados
const filteredProdutos = computed(() => {
  return produtoStore.produtos.filter(produto => filteredIds.includes(produto.id));
});
</script>

<template>
  <div class="carrinho">
    <header>
      <h1>Produtos</h1>
    </header>
    <section class="produtos-list">
      <div v-if="filteredProdutos.length === 0" class="mensagem">
        <p>Produtos não encontrados!!!</p>
      </div>
      <div v-for="produto in filteredProdutos" :key="produto.id" class="produto-item">
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
            <span>1</span>
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
  background-color: #f9f9fc;
  border-radius: 16px;
  padding: 1rem;
  margin: 1rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

/* Cabeçalho */
header h1 {
  text-align: center;
  font-size: 1.8rem;
  color: #6d28d9;
  margin-bottom: 1rem;
}

/* Lista de Produtos */
.produtos-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Card do Produto */
.produto-item {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  gap: 1rem;
  transition: transform 0.2s ease;
}

.produto-item:hover {
  transform: translateY(-5px);
}

/* Imagem do Produto */
.produto-imagem img {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  background-color: #f3f4f6;
}

/* Detalhes do Produto */
.produto-detalhes {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.produto-nome {
  font-weight: bold;
  font-size: 1rem;
  color: #6d28d9;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.produto-nome:hover {
  color: #a855f7;
}

.preco {
  font-size: 0.9rem;
  color: #7e22ce;
  font-weight: bold;
}

/* Controle de Quantidade */
.produto-quantidade {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.quantidade-controle {
  display: flex;
  gap: 0.5rem;
}

.quantidade-controle button {
  background-color: #6d28d9;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quantidade-controle button:hover {
  background-color: #a855f7;
}

.quantidade-controle span {
  font-size: 1rem;
  font-weight: bold;
  color: #333333;
}

/* Rodapé com Botões */
.acoes {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: space-between;
}

.acoes button {
  flex: 1;
  background-color: #6d28d9;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 0.8rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;
}

.acoes button:hover {
  background-color: #a855f7;
  transform: translateY(-2px);
}

/* Responsividade */
@media (max-width: 480px) {
  .produto-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .quantidade-controle button {
    width: 25px;
    height: 25px;
  }

  .acoes button {
    padding: 0.6rem;
    font-size: 0.8rem;
  }
}
</style>
