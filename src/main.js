// main.js
import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia'; 
import App from './App.vue';
import router from './router';
// const pinia = createPinia(); 

const app = createApp(App); 
app.use(createPinia()); 
app.use(router);
app.mount('#app');