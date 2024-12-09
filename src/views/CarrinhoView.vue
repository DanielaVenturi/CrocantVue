<template>
  <div id="app">
    <header>
      <span class="icon">🛒</span>
    </header>
    <div class="divider"></div>

    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Produto" class="product-image" />
        <div class="product-info">
          <span>{{ product.name }} - ${{ product.price.toFixed(2) }}</span>

          <div class="quantity-controls">
            <h2>Quantidade</h2>
            <div class="quantity-button">
              <button class="rounded-btn" @click="decreaseQuantity(product)">-</button>
            </div>
            <div class="quantity-display">
              <span>{{ product.quantity }}</span>
            </div>
            <div class="quantity-button">
              <button class="rounded-btn" @click="increaseQuantity(product)">+</button>
            </div>
          </div>

          <button class="add-to-cart-btn" @click="addToCart(product)">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>

    <div class="cart">
      <div class="cart-item" v-for="item in cart" :key="item.id">
        <img :src="item.image" alt="Produto" class="cart-image" />
        <div class="cart-info">
          <span>{{ item.name }} - ${{ item.price.toFixed(2) }} ({{ item.quantity }})</span>
          <button class="rounded-btn" @click="removeFromCart(item)">Remover</button>
        </div>
      </div>
      <div v-if="cart.length > 0" class="cart-summary">
        <h3>Total: ${{ cartTotal.toFixed(2) }}</h3>
      </div>
      <div class="cart-actions-controls">
        <button class="button-cart" @click="selectAll">Selecionar Tudo</button>
        <button class="button-cart" @click="clearCart">Excluir</button>
        <button class="button-cart" @click="checkout">Finalizar Compra</button>
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
        { id: 1, name: 'Produto A', price: 10.0, image: 'https://via.placeholder.com/100x100?text=Produto+A', quantity: 0 },
        { id: 2, name: 'Produto B', price: 20.0, image: 'https://via.placeholder.com/100x100?text=Produto+B', quantity: 0 },
        { id: 3, name: 'Produto C', price: 30.0, image: 'https://via.placeholder.com/100x100?text=Produto+C', quantity: 0 },
      ],
      cart: [],
    };
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    increaseQuantity(product) {
      product.quantity++;
    },
    decreaseQuantity(product) {
      if (product.quantity > 0) {
        product.quantity--;
      }
    },
    addToCart(product) {
      if (product.quantity > 0) {
        const cartItem = this.cart.find((item) => item.id === product.id);
        if (cartItem) {
          cartItem.quantity += product.quantity;
        } else {
          this.cart.push({ ...product, quantity: product.quantity });
        }
        product.quantity = 0;
      }
    },
    removeFromCart(item) {
      this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
    },
    selectAll() {
      this.cart = this.products.map((product) => ({ ...product, quantity: product.quantity || 1 }));
    },
    clearCart() {
      this.cart = [];
    },
    checkout() {
      if (this.cart.length > 0) {
        alert(`Compra finalizada! Total: $${this.cartTotal.toFixed(2)}`);
        this.clearCart();
      } else {
        alert('Carrinho vazio!');
      }
    },
  },
};
</script>
<style scoped>

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
.product{
  color: #864EFF;
  font-family: "Cherry Bomb One", system-ui;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 20%;
}

.products,
.cart {
  margin: 20px auto;
  max-width: 1000px;
  padding: 20px;
  background: #F0ECFF;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgb(100, 97, 97);
  text-align: center;
}

.product,
.cart-item {
  margin: 15px 0;
  padding: 10px;
  border-radius: 8px;
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product span,
.cart-item span {
  font-size: 16px;
}
.product-info {
  color: #864EFF;
  font-family: "Cherry Bomb One", system-ui;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 20%;
  
}


.quantity-controls {
  display: flex;
  align-items: center;
  
}

.quantity-button {
  margin: 0 5px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 200%;

}
.quantity-display {
  margin: 0 5px;
}

button {
  background: #864EFF;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 14px;
  height: 30px;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  font-family: "Cherry Bomb One", system-ui;
}

button:hover {
  background: #864EFF;
  box-shadow: 0 0 15px rgba(134, 78, 255, 0.5);
}

button:active {
  transform: scale(0.95);
}

.add-to-cart-btn {
  margin-top: 10px;
}

.cart {
  max-width: 900px;
  margin: 0 auto;
  background: #864EFF;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 10px rgb(100, 97, 97);
}

.cart-item {
  border: 1px solid #e0e0e0;
  background: #fafafa;
  padding: 15px;
}

.cart-summary {
  margin-top: 15px;
}

.cart-actions {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.cart-actions-controls{
  display: flex;
  justify-content: space-between;
  margin-bottom:60px;
}
.button-cart{
  font-family: "Cherry Bomb One", system-ui;
  text-align: center;
  font-size: 30px;
}
.select-all-label{
  font-family: "Cherry Bomb One", system-ui;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 20%;
  font-size: 30px;
  color: #F0ECFF; 
}

h1,
h2,
h3 {
  color: #864EFF;
}

h1 {
  margin-bottom: 20px;
  font-size: 32px;
  text-align: center;
  font-family: "Cherry Bomb One", system-ui;
}

h2 {
  margin-bottom: 15px;
  font-size: 25px;
  text-align: center;
  font-family: "Cherry Bomb One", system-ui;
  font-weight: lighter;
}

h3 {
  margin-top: 15px;
  font-size: 20px;
  font-family: "Cherry Bomb One", system-ui;
}


</style>
