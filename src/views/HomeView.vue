<script setup>
import ProductList from '@/components/ProductList.vue';
import { onMounted } from 'vue';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token');
    const passageUser = new PassageUser(authToken);
    const user = await passageUser.userInfo(authToken);
    if (user) {
      await authStore.setToken(authToken);
    } else {
      authStore.unsetToken();
    }
  } catch (error) {
    authStore.unsetToken();
  }
};

onMounted(() => {
  getUserInfo();
});
</script>

<template>

  <div class="product-card-colecoes">
    <div class="product-card">
      <img src="@/assets/imagens/disney.webp" alt="Disney" />
    </div>
    <div class="product-card">
      <img src="" alt="Star Wars" />
    </div>
    <div class="product-card">
      <img src="" alt="Shrek" />
    </div>
    <div class="product-card">
      <img src="" alt="Hello Kitty" />
    </div>
    <div class="product-card">
      <img src="" alt="Harry Potter" />
    </div>
  </div>

  <product-list />
</template>

<style scoped>


.product-card-colecoes {
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-evenly;
}

.product-card {
  width: 120px;
  height: 120px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;
  margin-bottom: 15px; /* Adiciona margem inferior para espaçamento entre as linhas */
}

.product-card img {
  max-width: 100%;
  max-height: 150%;
}

.product-card:hover {
  transform: scale(1.05);
}


</style>
