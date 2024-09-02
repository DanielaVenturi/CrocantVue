<script setup>
import { ref } from 'vue';
import LogoTitle from '@/components/templates/LogoTitle.vue';
import { onBeforeRouteUpdate } from 'vue-router';

const showMenu = ref(false);

onBeforeRouteUpdate(() => {
  showMenu.value = false;
});
</script>

<template>
  <div id="footerMenu" :style="{ display: showMenu ? 'block' : 'none' }">
    <div class="column">
      <p>Clogs</p>
      <p>Plataformas</p>
      <p>Sandálias</p>
      <p>Chinelos</p>
      <p>Botas</p>
      <p>Slides</p>
      <p>Tênis</p>
    </div>
    <div class="divider"></div>
    <div class="column">
      <p class="title">TENDÊNCIAS</p>
      <p>Altura Classic</p>
      <p>Glitter Lined</p>
      <p class="highlight">VER TUDO EM FEMININO</p>
    </div>
    <div class="divider"></div>
    <div class="column">
      <p class="title">COLEÇÕES POPULARES</p>
      <p>NBA</p>
      <p>3D</p>
      <p>Disney</p>
    </div>
  </div>
<div class="hamburger" @click="showMenu = !showMenu">
  <i class="mdi mdi-menu" />
  Menu
</div>
    <logo-title class="pl-0" />
    <div class="icons">
      <i class="mdi mdi-magnify" />
    </div>
</template>

<style scoped>
.dropdown-menu {
  display: flex;
  justify-content: space-around;
  background-color: #f2ebfc;
  padding: 1rem;
  top: 100%;
  left: 0;
  right: 0;
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