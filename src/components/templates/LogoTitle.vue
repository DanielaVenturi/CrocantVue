<script setup></script>
<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="LojaCrocant Logo" />
    <h2>Crocant</h2>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  padding-left: 3rem;
  gap: 1rem;
  align-items: center;
}

.logo img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
}

.logo h2{
  font-family: "Cherry Bomb One", system-ui;
  font-weight: 400;
  font-style: normal;
  color: #864EFF;
}
</style>