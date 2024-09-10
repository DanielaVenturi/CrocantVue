<script setup>
import { ref } from 'vue';
import LogoTitle from '@/components/templates/LogoTitle.vue';

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>

<template>
  <div class="navbar">
    <logo-title class="logo" />
    <div class="menu">
      <router-link to="/" @click="toggleDropdown">Feminino</router-link>
      <router-link to="/" @click="toggleDropdown">Masculino</router-link>
      <router-link to="/" @click="toggleDropdown">Infantil</router-link>
      <router-link to="/" @click="toggleDropdown">Pins</router-link>
      <router-link to="/" @click="toggleDropdown">Pro Trabalho</router-link>
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

  <div v-if="showDropdown" class="dropdown-menu">
    <div class="column">
      <router-link to="/produto" @click="toggleDropdown">Clogs</router-link>
      <router-link to="/produto" @click="toggleDropdown">Plataformas</router-link>
      <router-link to="/produto" @click="toggleDropdown">Sandálias</router-link>
      <router-link to="/produto" @click="toggleDropdown">Chinelos</router-link>
      <router-link to="/produto" @click="toggleDropdown">Botas</router-link>
      <router-link to="/produto" @click="toggleDropdown">Slides</router-link>
      <router-link to="/produto" @click="toggleDropdown">Tênis</router-link>
    </div>
    <div class="divider"></div>
    <div class="column">
      <p class="title">TENDÊNCIAS</p>
      <router-link to="/produto" @click="toggleDropdown">Altura Classic</router-link>
      <router-link to="/produto" @click="toggleDropdown">Glitter Lined</router-link>
      <router-link to="/produto" @click="toggleDropdown" class="highlight">VER TUDO EM FEMININO</router-link>
    </div>
    <div class="divider"></div>
    <div class="column">
      <p class="title">COLEÇÕES POPULARES</p>
      <router-link to="/produto" @click="toggleDropdown">NBA</router-link>    
      <router-link to="/produto" @click="toggleDropdown">3D</router-link>
      <router-link to="/produto" @click="toggleDropdown">Disney</router-link>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem 2rem;
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 100; 
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

.user-actions {
  text-decoration: none;
  color: #864EFF;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s, color 0.3s;
}

.dropdown-menu {
  display: flex;
  justify-content: space-around;
  background-color: #f2ebfc;
  padding: 1rem;
  margin-top: 130px;
  left: 50%;
  right: 50%;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  
}

.column {
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #864EFF;
}

.divider {
  border-left: 1px solid #864EFF;
  margin: 0 1rem;
}

.column .title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.column p, .column a {
  margin: 0.3rem 0;
  color: #864EFF;
  text-decoration: none;
}

.column a {
  color: #864EFF;
  text-decoration: none;
  /* Remove hover effect */
  transition: none;
}

.highlight {
  font-weight: bold;
}

.banner {
  background-color: #FFE8F9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin-top: 4rem; 
  position: relative;
  z-index: 1;
  height: 300px;
}

.banner h2 {
  font-family: "Cherry Bomb One", system-ui;
  color: #864EFF;
}

img {
  max-width: 15%;
  height: auto;
}
</style>
