<template>
  <div>
      <h1>메인 페이지</h1>
      <p>메인 페이지 입니다</p>
      <div>
        {{ products }}
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
data() {
  return {
    products: []
  }
},

  async created() {
    console.log("???")
    const response = await axios.get('http://localhost:3000/products');
    console.log("response", response);
    this.products = response.data;
  }
}
</script>

<style>

</style>