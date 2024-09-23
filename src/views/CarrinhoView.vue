<template>
  <div id="app">
    <header>
      <span class="icon">🛒</span>
    </header>
    <div class="divider"></div>
   
    <div class="products">
      <h2>Produtos</h2>
      <div class="product" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Produto" class="product-image" />
        <div class="product-info">
          <span>{{ product.name }} - ${{ product.price.toFixed(2) }}</span>
          <button @click="addToCart(product)">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>

    <div class="cart">
      <h2>Carrinho</h2>

      <div class="cart-item" v-for="item in cart" :key="item.id">
        <img :src="item.image" alt="Produto" class="cart-image" />
        <div class="cart-info">
          <span>{{ item.name }} - ${{ item.price.toFixed(2) }} ({{ item.quantity }})</span>
          <button @click="removeFromCart(item)">Remover</button>
        </div>
      </div>
      <div v-if="cart.length > 0" class="cart-summary">
        <h3>Total: ${{ cartTotal.toFixed(2) }}</h3>
      </div>
      <div class="cart-actions">
        <button class="action-btn">Selecionar Tudo |</button>
        <button class="action-btn">Excluir |</button>
        <button class="action-btn">Continuar |</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      products: [
        { id: 1, name: 'Produto A', price: 10.00, image: 'https://via.placeholder.com/100x100?text=Produto+A' },
        { id: 2, name: 'Produto B', price: 20.00, image: 'https://via.placeholder.com/100x100?text=Produto+B' },
        { id: 3, name: 'Produto C', price: 30.00, image: 'https://via.placeholder.com/100x100?text=Produto+C' }
      ],
      cart: []
    };
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    addToCart(product) {
      const existingItem = this.cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index > -1) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          this.cart.splice(index, 1);
        }
      }
    }
  }
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  background: #f5f5f5;
  color: #333;
  padding: 20px;
}

header {
  position: fixed;
  top: 0;
  right: 0;
  padding: 15px;
  background: #864EFF;
  color: #fff;
  border-bottom: 2px solid #5c0cda;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 28px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.icon:hover {
  color: #d8aaff;
}

.divider {
  height: 2px;
  background-color: #864EFF;
  margin: 80px 0;
}

.products, .cart {
  margin: 20px auto;
  max-width: 900px;
  padding: 20px;
  background: #F0ECFF;
  border-radius: 50px;
  box-shadow: 0 4px 10px rgb(100, 97, 97);
  text-align: center;
}

.products {
  border: 1px solid #F0ECFF;
}

.product, .cart-item {
  margin: 15px 0;
  padding: 10px;
  border-radius: 8px;
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.product span, .cart-item span {
  font-size: 16px;
}

button {
  background: #864EFF;
  color: #fff;
  border: none;
  border-radius: 0px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

button:hover {
  background: #5c0cda;
  box-shadow: 0 0 15px rgba(134, 78, 255, 0.5);
}

button:active {
  transform: scale(0.95);
}

.add-to-cart-btn {
  margin-top: 10px;
}

.cart {
  padding-top: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.952);
  border-radius: 60px;
  background: #C1A5FF;
  width: 1418px;
  height: 100px;
  flex-shrink: 0;
}

.cart-item {
  border: 1px solid #e0e0e0;
  background: #fafafa;
  padding: 15px;
}

.cart-summary {
  margin-top: 15px;
}

.cart-buttons {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
 
}

.cart-buttons button {
  background: #864EFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
}

.cart-buttons button:hover {
  background: #5c0cda;
}
.cart-length{
  text-align: center;
}

h1, h2, h3 {
  color: #864EFF;
}

h1 {
  margin-bottom: 20px;
  font-size: 32px;
  text-align: center;
}

h2 {
  margin-bottom: 15px;
  font-size: 24px;
  text-align: center;
  top: 20px;
}

h3 {
  margin-top: 15px;
  font-size: 20px;
}

</style>

