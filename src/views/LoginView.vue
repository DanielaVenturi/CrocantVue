<script setup>
import '@passageidentity/passage-elements/passage-auth';
</script>

<template>
  <div class="login-container">
    <div class="mascote">
      <img src="/src/assets/imagens/lagarto.png" alt="" />
    </div>
   
  <div class="authContainer">
    <passage-auth app-id="5DAaOaVZqqNtEpUNvpeRIiTG"></passage-auth>
  </div>
    
  </div>
  
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

.mascote {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.mascote img {
  max-width: 500px;
}


.authContainer {
  flex: 2;
}



</style>
