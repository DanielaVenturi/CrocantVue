<script setup>
import LogoTitle from '@/components/templates/LogoTitle.vue';
</script>

<template>
  <div class="logo_and_menu">
    <logo-title class="mb-2" />
    <div class="menu">
      <router-link to="/">
       Feminino
      </router-link>
      <router-link to="/">
       Masculino
      </router-link>
      <router-link to="/">
        Infantil
      </router-link>
      <router-link to="/login">
      Entrar
      </router-link>
      <router-link to="/">
       Feminino
      </router-link>
      <router-link to="/">
       Pins
      </router-link>
      <router-link to="/">
        Pro Trabalho
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.logo_and_menu {
  display: flex;
  gap: 3rem;
  align-items: center;
  font-size: 1.7rem;
 
}

.mb-2 {
  margin-bottom: 1.5rem;
}

.icon {
  font-size: 2rem;
  align-self: center;
}


.menu {
  padding: 3rem;
}

.menu a {

  text-decoration: none;
  color: #864EFF;
  gap: 1rem;
  font-size: 1.3rem;
  margin-top: 2.2rem;
}
</style>