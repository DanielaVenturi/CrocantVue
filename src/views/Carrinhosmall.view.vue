<template>
  <div id="app">
    <!-- Ícone do Carrinho na barra de navegação -->
    <nav class="navbar">
      <div class="cart-icon">
        🛒 <span class="cart-count">3</span> <!-- Exemplo: 3 itens no carrinho -->
      </div>
    </nav>

    <!-- Carrinho de Compras (Visual estático) -->
    <div class="cart-container">
      <h4>Carrinho de Compras</h4>
      <ul class="cart-items">
        <li class="cart-item">
          <img src="https://via.placeholder.com/50" alt="Produto 1" />
          <div class="item-details">
            <p>Produto 1</p>
            <p>Preço: 10$</p>
            <div class="quantity-controls">
              <button class="quantity-btn">-</button>
              <span class="quantity">1</span>
              <button class="quantity-btn">+</button>
            </div>
          </div>
          <button class="remove-btn">Remover</button>
        </li>
        <li class="cart-item">
          <img src="https://via.placeholder.com/50" alt="Produto 2" />
          <div class="item-details">
            <p>Produto 2</p>
            <p>Preço: 20$</p>
            <div class="quantity-controls">
              <button class="quantity-btn">-</button>
              <span class="quantity">2</span>
              <button class="quantity-btn">+</button>
            </div>
          </div>
          <button class="remove-btn">Remover</button>
        </li>
        <li class="cart-item">
          <img src="https://via.placeholder.com/50" alt="Produto 3" />
          <div class="item-details">
            <p>Produto 3</p>
            <p>Preço: 30$</p>
            <div class="quantity-controls">
              <button class="quantity-btn">-</button>
              <span class="quantity">1</span>
              <button class="quantity-btn">+</button>
            </div>
          </div>
          <button class="remove-btn">Remover</button>
        </li>
      </ul>

      <!-- Resumo do Pedido -->
      <div class="cart-summary">
        <p>Total: 60$</p>
        <button class="checkout-btn">Finalizar Compra</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Sem funcionalidades por enquanto
};
</script>

<style scoped>
/* Estilo para o carrinho */

body {
  font-family: Arial, sans-serif;
}

.navbar {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: #f8f9fa;
}

.cart-icon {
  cursor: pointer;
  position: relative;
  font-size: 1.5em;
}

.cart-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 0.8em;
}

.cart-container {
  margin: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.cart-item img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.item-details {
  flex: 1;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 5px;
}

.quantity-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.quantity {
  font-size: 1.2em;
}

.remove-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.cart-summary {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkout-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
