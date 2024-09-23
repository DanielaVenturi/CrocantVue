<script setup>
import { ref } from 'vue';
import LogoTitle from '@/components/templates/LogoTitle.vue';
import { onBeforeRouteUpdate } from 'vue-router';

// Estados para cada seção
const showMenu = ref(false);
const showFeminino = ref(false);
const showMasculino = ref(false);
const showInfantil = ref(false);

// Função para abrir uma seção e fechar as outras
const toggleSection = (section) => {
  if (section === 'feminino') {
    showFeminino.value = !showFeminino.value;
    showMasculino.value = false;
    showInfantil.value = false;
  } else if (section === 'masculino') {
    showMasculino.value = !showMasculino.value;
    showFeminino.value = false;
    showInfantil.value = false;
  } else if (section === 'infantil') {
    showInfantil.value = !showInfantil.value;
    showFeminino.value = false;
    showMasculino.value = false;
  }
};

onBeforeRouteUpdate(() => {
  showMenu.value = false;
});
</script>

<template>
  <div class="hamburger" @click="showMenu = !showMenu">
    <i class="mdi mdi-menu" />
  </div>

  <div id="footerMenu" :style="{ display: showMenu ? 'block' : 'none' }">
    <!-- Feminino -->
    <div class="column">
      <p @click="toggleSection('feminino')" class="title">Feminino</p>
      <div :class="['section-content', { show: showFeminino }]">
        <router-link to="/produto" @click="showFeminino = !showFeminino">VER TUDO EM FEMININO</router-link> <br>
        <router-link to="/produto">Plataformas</router-link> <br>
        <router-link to="/produto">Sandálias</router-link><br>
        <router-link to="/produto">Chinelos</router-link><br>
        <router-link to="/produto">Botas</router-link><br>
        <router-link to="/produto">Slides</router-link><br>
        <router-link to="/produto">Tênis</router-link><br>
        <router-link to="/produto">Altura Classic</router-link><br>
        <router-link to="/produto">Glitter Lined</router-link><br>
        <router-link to="/produto">NBA</router-link><br>
        <router-link to="/produto">3D</router-link><br>
        <router-link to="/produto">Disney</router-link>
      </div>
    </div>
    <hr>

    <!-- Masculino -->
    <div class="column">
      <p @click="toggleSection('masculino')" class="title">Masculino</p>
      <div :class="['section-content', { show: showMasculino }]">
        <router-link to="/" @click="showMasculino = !showMasculino">VER TUDO EM MASCULINO</router-link> <br>
        <router-link to="/produto">Plataformas</router-link> <br>
        <router-link to="/produto">Sandálias</router-link><br>
        <router-link to="/produto">Chinelos</router-link><br>
        <router-link to="/produto">Botas</router-link><br>
        <router-link to="/produto">Slides</router-link><br>
        <router-link to="/produto">Tênis</router-link><br>
        <router-link to="/produto">Altura Classic</router-link><br>
        <router-link to="/produto">Glitter Lined</router-link><br>
        <router-link to="/produto">NBA</router-link><br>
        <router-link to="/produto">3D</router-link><br>
        <router-link to="/produto">Disney</router-link>
      </div>
      <hr>
    </div>

    <!-- Infantil -->
    <div class="column">
      <p class="title" @click="toggleSection('infantil')">Infantil</p>
      <div :class="['section-content', { show: showInfantil }]">
        <router-link to="/" @click="showInfantil = !showInfantil">VER TUDO EM INFANTIL</router-link> <br>
        <router-link to="/produto">Plataformas</router-link> <br>
        <router-link to="/produto">Sandálias</router-link><br>
        <router-link to="/produto">Chinelos</router-link><br>
        <router-link to="/produto">Botas</router-link><br>
        <router-link to="/produto">Slides</router-link><br>
        <router-link to="/produto">Tênis</router-link><br>
        <router-link to="/produto">Altura Classic</router-link><br>
        <router-link to="/produto">Glitter Lined</router-link><br>
        <router-link to="/produto">NBA</router-link><br>
        <router-link to="/produto">3D</router-link><br>
        <router-link to="/produto">Disney</router-link>
      </div>
      <hr>
      <router-link to="/" class="highlight">Pins</router-link>
    </div>
  </div>

  <logo-title class="pl-0" />
  <div class="icons"></div>
</template>



<style scoped>
/* Transição suave para abrir e fechar cada seção */
.section-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.3s ease-in-out;
  opacity: 0;
}

.section-content.show {
  max-height: 500px;
  /* Um valor suficiente para acomodar o conteúdo */
  opacity: 1;
}

/* Estilizações do menu */
.hamburger {
  font-size: 2rem;
  cursor: pointer;
  color: #864EFF;
  position: relative;
  display: flex;
  align-items: center;
}

.hamburger i {
  transition: transform 0.3s ease;
}

.hamburger:hover i {
  transform: rotate(90deg);
}

#footerMenu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #FFE8F9;
  padding: 1.5rem 1rem;
  z-index: 10;
  border-radius: 0em 1rem 1rem 0rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.column {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.column .title {
  font-weight: 600;
  margin-bottom: 0.75rem;
  cursor: pointer;
  font-size: 1.25rem;
  color: #864EFF;
  position: relative;
  transition: color 0.3s ease;
}

.column .title:hover {
  color: #FF007C;
}

.column p {
  margin: 0.3rem 0;
  font-size: 1rem;
  color: #333;
  transition: color 0.2s ease;
}

.column p:hover {
  color: #FF007C;
}

hr {
  height: 2px;
  border: none;
  background-color: #864EFF;
  margin: 1rem 0;
}

.highlight {
  font-weight: 700;
  font-size: 1.1rem;
  color: #FF007C;
  text-decoration: underline;
}

.icons {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.icons i {
  font-size: 1.5rem;
  color: #864EFF;
  margin: 0 0.5rem;
  transition: color 0.3s ease;
}

.icons i:hover {
  color: #FF007C;
}
</style>
