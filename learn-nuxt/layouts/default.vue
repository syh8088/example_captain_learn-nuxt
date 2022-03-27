<template>
  <div>
      <header>
        <h1>{{ $route.name }}</h1>
        <NuxtLink to="/">홈페이지</NuxtLink>
        <NuxtLink to="/main">메인 페이지</NuxtLink>
        <NuxtLink to="/product">상품 페이지</NuxtLink>
      </header>
  </div>
  <!-- <Nuxt /> -->
</template>

<script>
export default {
    created() {
        console.log(this.$route)
    }
}
</script>

<style>

</style>