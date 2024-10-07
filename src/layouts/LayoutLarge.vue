<script setup>
  import LargeHeader from '@/components/templates/large/LargeHeader.vue';
  import LargeAdvertising from '@/components/templates/large/LargeAdvertising.vue';
  import LargeFooter from '@/components/templates/large/LargeFooter.vue';
</script>

<template>
  <div id="layout-large">
    <aside>
     <large-advertising/>
    </aside>
    <header>
      <large-header />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <large-footer />
    </footer>
  </div>
</template>

<style scoped>
#layout-large {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  width: 100vw;
  padding: 1.5rem;
  grid-area: header;
}

main {
  flex: 1;
  padding: 2rem;
  grid-area: main;
  background-color: #fff;
}
aside{
  width: 100%;
  margin-bottom: -40px;
}
footer {
  display: flex;
  background-color: #864EFF;
  grid-area: footer;
}

</style>