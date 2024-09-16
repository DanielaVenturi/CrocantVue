import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: '/produtos/adicionar',
          name: 'ProductAdd',
          component: () => import('@/views/ProductAddView.vue'),
        },
        {
          path: '/produto',
          name: 'Produto',
          component: () => import('@/views/ProdutoView.vue'),
        },
        {
          path: '/carrinho',
          name: 'Carrinho',
          component: () => import('@/views/CarrinhoView.vue'),
        },
        {
        path: '/carrinhoSmall',
        name: 'CarrinhoSmall',
        component: () => import('@/views/Carrinhosmall.view.vue'),
      }
      ],
    },
  ],
});

export default router;