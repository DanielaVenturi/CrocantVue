      
    <script setup>
import { onMounted } from 'vue';
import { useProdutoStore } from '@/stores/produto';

const produtoStore = useProdutoStore();

async function fetchProdutos() {
  await produtoStore.getProduto();
}

onMounted(fetchProdutos);
</script>
      <!-- // const priceRange = ref(287);
      // const produtos = ref([
      //   {
      //     name: 'Sandália Crocs Bayaband Clog BALLERINA PINK/ CANDY PINK',
      //     price: 'R$ 287,10',
      //     image: '/src/assets/imagens/Frame6.png',
      //   },

      // ]); -->

    
      <template>
          <div class="produto-view">
            <aside class="filter-section">
              <h2>CLOGS Ex.</h2>
              <div class="filter">
                <p>Faixa de Preço</p>
                <input type="range" min="100" max="500" v-model="priceRange" class="slider" />
                <p>Cor</p>
                <div class="color-picker">
                  <div class="color-swatch" style="background-color: #FFBAD8;"></div>
                </div>
              </div>
            </aside>
        
            <section class="produtos-list">
              <div
                v-for="(produtos, index) in multipliedProducts"
                :key="index"
                class="produtos-card"
              >
                <img :src="produtos.capa" alt="produtos" />
                <p>{{ produtos.nome }}</p>
                <p class="price">{{ produtos.preco }}</p>
                <router-link to="/maisproduto" >+</router-link>
              </div>
            </section>
          </div>
        </template>
        
      
        
        <style scoped>
        .produto-view {
        display: flex;
        padding: 2rem;
        margin-top: 80px;
      }

      .filter-section {
        width: 250px;
        margin-right: 2rem;
        background-color: #F9F2FF;
        padding: 1.5rem;
        border-radius: 12px;
        color: #864EFF;
      }

      .filter-section h2 {
        font-size: 2rem;
        color: #864EFF;
        margin-bottom: 1rem;
      }

      .filter p {
        margin-bottom: 0.5rem;
        font-weight: bold;
      }

      .slider {
        width: 100%;
        margin-bottom: 1rem;
      }

      .color-picker {
        display: flex;
        align-items: center;
      }

      .color-swatch {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-left: 0.5rem;
        background-color: #FFBAD8;
      }

      .produtos-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr); 
        gap: 2rem;
      }

      .produtos-card {
        background-color: #F9F2FF;
        padding: 1.5rem;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      }

      .produtos-card img {
        width: 100%;
        max-width: 150px;
        height: auto;
      }

      .produtos-card p {
        margin: 1rem 0;
        color: #864EFF;
      }

      .produtos-card .price {
        font-size: 1.2rem;
        font-weight: bold;
      }

      .produtos-card button {
        background-color: #864EFF;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .produtos-card button:hover {
        background-color: #D78FFF;
      }

      @media only screen and (max-width: 768px) {
      
        .produto-view {
          flex-direction: column;
          align-items: center;
        }

        .filter-section {
          width: 100%;
          margin-bottom: 1.5rem;
          margin-right: 0;
        }

        .produtos-list {
          grid-template-columns: 1fr;
        }
      }
      </style>