<template>
    <!-- <ProductList></ProductList> -->
    <div class="app">
      <main>
        <!-- :search-keyword="searchKeyword" 
        @input="updateSearchKeword" -->
        <SearchInput 
          v-model="searchKeyword"
          @search="searchProducts"
        ></SearchInput>
        <ul>
          <li
            v-for="product in products"
            :key="product.id"
            class="item flex"
            @click="routeToDetailPage(product.id)"
          >
            <img class="product-image" :src="product.imageUrl" :alt="product.name">
              <p>{{ product.name }}</p>
              <span>{{ product.price }}</span>
          </li>
        </ul>
      </main>
    
    </div>
</template>

<script>
import axios from 'axios';
import SearchInput from '@/components/SearchInput.vue';
import { fetchProductsByKeyword } from '~/api';
// import ProductList from '~/components/ProductList.vue';

export default {
  components: { SearchInput },
  // components: { ProductList },

    async asyncData() {
        const response = await axios.get('http://localhost:3000/products');
        console.log("response", response);
        const products = response.data.map((item) => {
          return {
            ...item,
            imageUrl: `${item.imageUrl}?random=${Math.random()}`,
          }
        });

        return { products };
    },
    data() {
      return {
        searchKeyword: '',
      }
    },

    methods: {
      // async filterItemsBySearchText() {
      //   const { data } = await fetchProductsByKeyword(this.inputText)
      //   this.items = data.map((item) => ({
      //     ...item,
      //     imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      //   }))
      // },
      routeToDetailPage(id) {
        this.$router.push(`/detail/${id}`)
      },
      routeToCartPage() {
        this.$router.push('/cart')
      },
      updateSearchKeword(keyword) {
        this.searchKeyword = keyword;
      },
      async searchProducts() {
        const response = await fetchProductsByKeyword(this.searchKeyword);
        console.log("searchProducts -> response", response)
        this.products = response.data.map((item) => {
          return {
            ...item,
            imageUrl: `${item.imageUrl}?random=${Math.random()}`,
          }
        });
      }
    },
// async created() {
//   }
 }
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>