<!-- <script setup>
import { ref } from 'vue';

const userName = ref('');
const birthDate = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');
const receivePromotions = ref(false);
</script>

<template>
  <div class="register-container">
    <div class="register-box">
      <h1>Cadastre-se</h1>
      <form class="register-form">
        <div class="input-group">
          <div class="input-half">
            <label for="name">Nome:</label>
            <input type="text" id="name" v-model="userName" placeholder="Nome">
          </div>
          <div class="input-half">
            <label for="birthdate">Data de Nasc:</label>
            <input type="date" id="birthdate" v-model="birthDate">
          </div>
        </div>

        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" placeholder="E-mail">

        <label for="phone">Telefone:</label>
        <input type="tel" id="phone" v-model="phone" placeholder="Telefone">

        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" placeholder="Senha">

        <label for="confirmPassword">Confirmar Senha:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirmar Senha">

        <div class="remember-container">
          <input type="checkbox" id="promotions" v-model="receivePromotions">
          <label for="promotions">Desejo receber mensagens promocionais</label>
        </div>

        <button type="submit" class="register-button">Cadastrar</button>

        <p class="login-link">Já possui uma conta? <a href="#">Faça login</a></p>
      </form>
    </div>
    <div class="mascot">
      <img src="/mnt/data/Captura de tela de 2024-09-23 14-51-29.png" alt="Mascot" />
    </div>
  </div>
</template>

<style>


.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.mascot {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mascot img {
  max-width: 400px;
}

.register-box {
  flex: 1;
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
}

h1 {
  color: #5d00c0;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 2rem;
}

label {
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
  font-size: 16px;
  color: #5d00c0;
}

.input-group {
  display: flex;
  justify-content: space-between;
}

.input-half {
  flex: 1;
  margin-right: 0.5rem;
}

.input-half:last-child {
  margin-right: 0;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 2px solid #e2e2e2;
  border-radius: 8px;
  font-size: 16px;
}

input:focus {
  border-color: #5d00c0;
  outline: none;
}

.remember-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
}

.remember-container label {
  margin-left: 0.5rem;
  color: #5d00c0;
  font-size: 14px;
}

.register-button {
  background-color: #5d00c0;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 100%;
}

.register-button:hover {
  background-color: #4b00a0;
}

.login-link {
  margin-top: 1rem;
  color: #5d00c0;
  font-size: 14px;
}

.login-link a {
  color: #5d00c0;
  font-weight: bold;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style> -->
