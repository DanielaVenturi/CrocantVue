<template>
    <div id="app">
      <h1>Carrinho de Compras</h1>
      <div class="products">
        <h2>Produtos</h2>
        <div v-for="product in products" :key="product.id" class="product">
          <span>{{ product.name }} - ${{ product.price.toFixed(2) }}</span>
          <button @click="addToCart(product)">Adicionar ao Carrinho</button>
        </div>
      </div>
  
      <div class="cart">
        <h2>Carrinho</h2>
        <div v-if="cart.length === 0">Seu carrinho está vazio</div>
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <span>{{ item.name }} - ${{ item.price.toFixed(2) }} ({{ item.quantity }})</span>
          <button @click="removeFromCart(item)">Remover</button>
        </div>
        <div v-if="cart.length > 0">
          <h3>Total: ${{ cartTotal.toFixed(2) }}</h3>
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
          { id: 1, name: 'Produto A', price: 10.00 },
          { id: 2, name: 'Produto B', price: 20.00 },
          { id: 3, name: 'Produto C', price: 30.00 }
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
  
  <style>
  #app {
    text-align: center;
  }
  
  .products, .cart {
    margin: 20px;
  }
  
  .product, .cart-item {
    margin: 10px;
  }
  </style>
  <style scoped>
  #app {
    font-family: 'Arial', sans-serif;
    background: #f5f5f5;
    color: #333;
  }
  
  header {
    position: fixed;
    top: 0;
    right: 0;
    padding: 15px;
    background: #6a0dad;
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
  
  .products, .cart {
    margin: 80px auto 20px;
    max-width: 900px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .products {
    border: 1px solid #ddd;
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
    background: #6a0dad;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  button:hover {
    background: #5c0cda;
  }
  
  button:active {
    transform: scale(0.95);
  }
  
  .cart {
    border-top: 2px solid #6a0dad;
    padding-top: 20px;
  }
  
  .cart-item {
    border: 1px solid #e0e0e0;
    background: #fafafa;
    padding: 15px;
  }
  
  h1, h2, h3 {
    color: #6a0dad;
  }
  
  h1 {
    margin-bottom: 20px;
    font-size: 32px;
  }
  
  h2 {
    margin-bottom: 15px;
    font-size: 24px;
  }
  
  h3 {
    margin-top: 15px;
    font-size: 20px;
  }
  
  </style>
  