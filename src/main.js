// main.js
import './assets/main.css';

import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'; // Importa o Pinia

// Cria uma instância do Vue
const app = createApp(App); // Declare 'app' aqui

const pinia = createPinia(); // Cria uma instância do Pinia

// Usa o Pinia e o router na instância do Vue
app.use(pinia);
app.use(router);

// Monta a aplicação
app.mount('#app');