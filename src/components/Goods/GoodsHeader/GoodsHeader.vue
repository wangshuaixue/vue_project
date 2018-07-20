<template>
  <div>
    <div class="wrap-items">
      <router-link to="/home">
        <span class="left-home"></span>
      </router-link>
      <router-link to="/home">
        <span class="center"></span>
      </router-link>

      <router-link to="/cart">
        <span class="right">
        <span class="search"></span>
        <span class="cart"></span>
      </span>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang='less'>
</style>
