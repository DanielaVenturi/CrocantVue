<script setup>
import LogoTitle from '@/components/templates/LogoTitle.vue';
</script>

<template>
  <div class="navbar">
    <logo-title class="logo" />
    <div class="menu">
      <router-link to="/">Feminino</router-link>
      <router-link to="/">Masculino</router-link>
      <router-link to="/">Infantil</router-link>
      <router-link to="/">Pins</router-link>
      <router-link to="/">Pro Trabalho</router-link>
    </div>
    <div class="user-actions">
      <router-link to="/login">
        <i class="icon mdi mdi-account-circle-outline" /> 
      </router-link>
      <router-link to="/">
        <i class="icon mdi mdi-cart-outline" /> 
      </router-link>
    </div>
  </div>
  <div class="banner">
    <div class="banner">
    <img class="banner-image" src="/src/assets/imagens/CrocCant.png" alt="Imagem 1">
    <h2>Pisando fofo com...</h2>
    <img class="banner-image" src="/src/assets/imagens/Frame 6.png" alt="Imagem 2">
    <h2>Croc Cant</h2>
  </div>

  </div>
</template>

<style scoped>
.banner h2{
  font-family: "Cherry Bomb One", system-ui;
  color: #864EFF;
}
.banner {
  background-color: #FFE8F9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin-top: 15px;
}

img {
  max-width: 15%;
  height: auto;
}
.navbar {
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  box-shadow: 8px 8px 8px #864EFF;
  padding: 1rem 2rem;
  margin-top: 30px;
}

.logo {
  font-size: 2rem;
  color: #864EFF; 
  flex-shrink: 0; 
}

.menu {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.menu a {
  text-decoration: none;
  color: #864EFF;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s, color 0.3s;
}

.menu a:hover {
  background-color: #864EFF;
  color: #fff;
  border-radius: 5px;
}

.user-actions{
    text-decoration: none;
  color: #864EFF;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s, color 0.3s;
}



</style> 


