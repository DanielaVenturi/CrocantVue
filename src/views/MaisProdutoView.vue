<script setup>
import { ref, onMounted } from 'vue';
import { useProdutoStore } from '@/stores/produto';
import { useRoute } from 'vue-router';

const produtoStore = useProdutoStore();
const produto = ref(null);
const route = useRoute();

async function fetchProduto() {
  try {
    const id = route.params.id; 
    produto.value = await produtoStore.getProdutoPorId(id);
  } catch (error) {
    console.error('Erro ao buscar o produto:', error);
  }
}

onMounted(() => {
  fetchProduto();
});



</script>

<template>
  <div>
    <div v-if="produto" class="container">
      <div class="image-section">
        <img :src="produto.capa.url" alt="Produto principal" class="product-image" />
        <div class="thumbnail-images">
         
        </div>
        <div class="description">
          <h3>Descrição</h3>
          <p>{{ produto.descricao }}</p>
        </div>4r
      </div>
      <div class="details-section">
        <h1>{{ produto.nome }}</h1>
        <p class="price">{{ produto.preco }}</p>
        <p class="installments">Em até 10x sem juros no cartão de crédito</p>
        <div  v-for="produto in produtoStore.produtos" :key="produto.id"  class="size-selection">
        <p>{{ produto.tamanho }}</p>
        </div>
        <div class="quantity">
          <label for="quantity">Quantidade</label>
          <div class="quantity-controls">
            <button class="quantity-button">-</button>
            <span class="quantity-display"></span>
            <button class="quantity-button" >+</button>
          </div>
        </div>
        
        <RouterLink  class="add-to-cart" to="/carrinho">
    Adicionar ao Carrinho
    </RouterLink>
      </div>
    </div>

  </div>
</template>


<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f2ebfc;
  margin: 0;
  padding: 0;
  color: #4a148c;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
}

.image-section {
  flex: 1;
  text-align: center;
}

.product-image {
  width: 80%;
  height: auto;
  border: 2px solid #864EFF;
  border-radius: 10px;
}

.thumbnail-images {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.thumbnail-images img {
  width: 60px;
  height: 60px;
  margin: 0 0.5rem;
  border-radius: 5px;
  border: 2px solid transparent;
  cursor: pointer;
}

.thumbnail-images img:hover {
  border-color: #864EFF;
}

.details-section {
  flex: 1;
  padding-left: 2rem;
}

.details-section h1 {
  font-size: 2rem;
  color: #864EFF;
  font-weight: bold;
}

.price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #4a148c;
  margin: 1rem 0;
}

.installments {
  font-size: 1rem;
  color: #864EFF;
}

.size-selection {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
}

.size-button {
  background-color: #864EFF;
  color: white;
  border: none;
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.size-button:hover {
  background-color: #6a0dad;
}

.quantity {
  margin: 1rem 0;
}

.quantity label {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #4a148c;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-button {
  background-color: #864EFF;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quantity-button:hover {
  background-color: #6a0dad;
}

.quantity-display {
  width: 50px;
  text-align: center;
  font-size: 1.5rem;
  margin: 0 0.5rem;
}

.add-to-cart {
  background-color: #864EFF;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover {
  background-color: #6a0dad;
}

.description {
  margin-top: 2rem;
}

.description h3 {
  font-size: 1.5rem;
  color: #4a148c;
  font-weight: bold;
}

.description p {
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
}


@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 1rem;
  }

  .image-section {
    margin-bottom: 1rem;
  }

  .product-image {
    width: 100%;
  }

  .thumbnail-images {
    margin: 0.5rem 0;
  }

  .thumbnail-images img {
    width: 40px;
    height: 40px;
  }

  .details-section {
    padding: 0;
    text-align: center;
  }

  .details-section h1 {
    font-size: 1.5rem;
  }

  .price {
    font-size: 1.5rem;
  }

  .installments {
    font-size: 0.9rem;
  }

  .size-button {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }

  .quantity-controls {
    justify-content: center;
  }

  .quantity-button {
    width: 30px;
    height: 30px;
    font-size: 1.2rem;
  }

  .quantity-display {
    width: 40px;
    font-size: 1.2rem;
  }

  .add-to-cart {
    padding: 0.8rem 1.5rem
  }}

</style>
