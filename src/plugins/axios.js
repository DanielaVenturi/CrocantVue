import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

axios.defaults.baseURL = `${BASE_URL}/api/`;

axios.interceptors.request.use(
  async (config) => {
    const authStore = useAuthStore();
    const token = authStore.getToken(); // Pega o token do store

    // const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  })