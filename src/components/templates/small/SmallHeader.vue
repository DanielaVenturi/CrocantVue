<script setup>
import { ref } from 'vue';
import LogoTitle from '@/components/templates/LogoTitle.vue';
import { onBeforeRouteUpdate } from 'vue-router';

// Estados para cada seção
const showMenu = ref(false);
const showCategorias = ref(false);
const showTendencias = ref(false);
const showColecoes = ref(false);

onBeforeRouteUpdate(() => {
  showMenu.value = false;
});
</script>

<template>
  <div class="hamburger" @click="showMenu = !showMenu">
    <i class="mdi mdi-menu" />
  </div>

  <div id="footerMenu" :style="{ display: showMenu ? 'block' : 'none' }">
    <div class="column">
      <p class="title" @click="showCategorias = !showCategorias">Categorias</p>
      <div v-if="showCategorias">
        <p>Plataformas</p>
        <p>Sandálias</p>
        <p>Chinelos</p>
        <p>Botas</p>
        <p>Slides</p>
        <p>Tênis</p>
      </div>
    </div>
    <hr>

    <div class="column">
      <p class="title" @click="showTendencias = !showTendencias">Tendências</p>
      <div v-if="showTendencias">
        <p>Altura Classic</p>
        <p>Glitter Lined</p>
      </div>
      <hr>
    </div>

    <!-- Coleções Populares -->
    <div class="column">
      <p class="title" @click="showColecoes = !showColecoes">Coleções Populares</p>
      <div v-if="showColecoes">
        <p>NBA</p>
        <p>3D</p>
        <p>Disney</p>
      </div>
      <hr>
      <p class="highlight">VER TUDO EM FEMININO</p>
    </div>

  </div>

  <logo-title class="pl-0" />
  <div class="icons"></div>
</template>

<style scoped>
hr {
  height: 3px;
  background-color: #864EFF;
}

.hamburger {
  position: relative;
  font-size: larger;
}

#footerMenu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #FFE8F9;
  padding: 1rem;
  z-index: 10;
  border-radius: 0em 1rem 1rem 0rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  cursor: pointer;
}

.column p {
  margin: 0.3rem 0;
}

.highlight {
  font-weight: bold;
}

.pl-0 {
  padding-left: 0rem;
}
</style>
