<template>
  <div>
    <ShopcarHeader
      backgroundColor="red"
      color="white"
      title="购物车"
    ></ShopcarHeader>
    <div class="main">
      <ShopcarItem></ShopcarItem>
    </div>
    <ShopcarFooter></ShopcarFooter>
  </div>
</template>

<script>
import ShopcarHeader from "./components/Shopcar_Header.vue";
import ShopcarFooter from "./components/Shopcar_Footer.vue";
import ShopcarItem from "./components/Shopcar_item.vue";

export default {
  components: { ShopcarHeader, ShopcarFooter, ShopcarItem },
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
}
</style>