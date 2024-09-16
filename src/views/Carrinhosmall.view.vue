<template>
  <div class="shopping-cart">
    <h1>Carrinho de Compras</h1>
    
    <div class="select-all">
      <input type="checkbox" id="select-all">
      <label for="select-all">Selecionar Todos</label>
    </div>
    
    <div class="product" v-for="product in products" :key="product.id">
      <div class="product-image">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p>Preço: R$ {{ product.price.toFixed(2) }}</p>
      </div>
      <div class="product-controls">
        <button class="minus">-</button>
        <input type="text" class="quantity" :value="product.quantity" readonly>
        <button class="plus">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Produto 1', price: 29.99, quantity: 1, image: 'https://via.placeholder.com/100/FF0000' },
        { id: 2, name: 'Produto 2', price: 59.99, quantity: 2, image: 'https://via.placeholder.com/100/00FF00' },
        { id: 3, name: 'Produto 3', price: 19.99, quantity: 1, image: 'https://via.placeholder.com/100/0000FF' },
        { id: 4, name: 'Produto 4', price: 49.99, quantity: 3, image: 'https://via.placeholder.com/100/FFFF00' },
      ]
    };
  }
};
</script>

<style scoped>
.shopping-cart {
  width: 60%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.select-all {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

.select-all input {
  margin-right: 10px;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.product-image img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-info {
  text-align: center;
  margin-bottom: 10px;
}

.product-info h2 {
  margin: 0;
  font-size: 18px;
}

.product-info p {
  margin: 5px 0;
  font-size: 16px;
  color: #555;
}

.product-controls {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: not-allowed; /* Botões desativados */
  margin: 0 5px;
}

.quantity {
  width: 40px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin: 0 5px;
  cursor: not-allowed;
}
</style>
