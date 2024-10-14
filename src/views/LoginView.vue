<script setup>
import '@passageidentity/passage-elements/passage-auth';
</script>

<template>
  <div class="login-container">
    <div class="mascot">
      <img src="/src/assets/imagens/lagarto.png" alt="" />
    </div>
    <div class="login-box">
      <passage-auth app-id="5DAaOaVZqqNtEpUNvpeRIiTG"></passage-auth>

      <!-- <h1>Olá <br> Bem Vindo a Crocant!</h1>
      <form class="login-form">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Email">

        <label for="password">Senha:</label>
        <input type="password" id="password" placeholder="Senha">

        <div class="remember-container">
          <input type="checkbox" id="remember-me">
          <label for="remember-me">Lembrar-me Senha</label>
        </div>

        <button type="submit" class="login-button">Login</button>

        <p class="signup">Novo membro?   <router-link to="/cadastro" ></router-link></p>
      </form> -->
    </div>
    
  </div>
  <!-- <h1>Login</h1>
  <div class="authContainer">
    <passage-auth app-id="5DAaOaVZqqNtEpUNvpeRIiTG"></passage-auth>
  </div> -->
</template>

<style>
body {
  background-color: #ffe6f0;
  font-family: 'Arial', sans-serif;
}

.login-container {
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

.login-box {
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

.login-button {
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

.login-button:hover {
  background-color: #4b00a0;
}

.signup {
  margin-top: 1rem;
  color: #5d00c0;
  font-size: 14px;
}

.signup a {
  color: #5d00c0;
  font-weight: bold;
  text-decoration: none;
}

.signup a:hover {
  text-decoration: underline;
}
</style>
