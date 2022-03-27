<template>
  <div>
      <h1>메인 페이지</h1>
      <p>메인 페이지 입니다</p>
      <!-- <ProductList></ProductList> -->
      <div>
        <ul>
          <li v-for="product in products" :key="product.id">
            <img :src="product.imageUrl" :alt="product.name">
            <p>{{ product.name }}</p>
            <p>{{ product.price }}</p>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
// import ProductList from '~/components/ProductList.vue';

export default {
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
        products: []
      }
    },
// async created() {
//   }
 }
</script>

<style>

</style>