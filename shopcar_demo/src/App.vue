<template>
  <div>
    <ShopcarHeader backgroundColor="red" color="white" title="购物车"></ShopcarHeader>
    <ShopcarMain></ShopcarMain>
    <ShopcarFooter></ShopcarFooter>
  </div>
</template>

<script>
import ShopcarHeader from "./components/Shopcar_Header.vue";
import ShopcarMain from "./components/Shopcar_Main.vue";
import ShopcarFooter from "./components/Shopcar_Footer.vue";

export default {
  components: {ShopcarHeader, ShopcarMain, ShopcarFooter},
};
</script>

<style>
</style>