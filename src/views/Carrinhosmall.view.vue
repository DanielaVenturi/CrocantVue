<template>
  <div class="shopping-cart">
    <h1>Carrinho de Compras</h1>
    
    <div class="select-all">
      <input type="checkbox" id="select-all">
      <label for="select-all">Selecionar Todos</label>
    </div>
    
    <div class="product" v-for="product in products" :key="product.id">
      <div class="product-image">
        <img src="/src/assets/imagens/Frame6.png" />
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
        { id: 1, name: 'Sandália Crocs Bayband clog BALLERINA PINK/CANDY/PINK', price: 29.99, quantity: 1, image: 'https://via.placeholder.com/100/FF0000' },
        { id: 2, name: 'Sandália Crocs Bayband clog BALLERINA PINK/CANDY/PINK', price: 59.99, quantity: 2, image: 'https://via.placeholder.com/100/00FF00' },
        { id: 3, name: 'Sandália Crocs Bayband clog BALLERINA PINK/CANDY/PINK', price: 19.99, quantity: 1, image: 'https://via.placeholder.com/100/0000FF' },
        { id: 4, name: 'Sandália Crocs Bayband clog BALLERINA PINK/CANDY/PINK', price: 49.99, quantity: 3, image: 'https://via.placeholder.com/100/FFFF00' },
      ]
    };
  }
};
</script>

<style scoped>
.shopping-cart {
  width: 60%;
  margin: 0 auto;
  font-family: Cherry Bomb One;
  color: #864EFF;
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
  border-bottom: 1px solid #000000;
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
  color: #000000;
}

.product-controls {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

button {
  background-color: #864EFF;
  color: rgb(255, 255, 255);
  border: none;
  padding: 10px 30px;
  cursor: not-allowed; /* Botões desativados */
  margin: 0 5px;
  border-radius: 10px;
}

.quantity {
  width: 40px;
  text-align: center;
  border: 1px solid #C1A5FF;
  border-radius: 5px;
  padding: 10px 40px;
  margin: 0 5px;
  cursor: not-allowed;
  background-color: ;
}
</style>
