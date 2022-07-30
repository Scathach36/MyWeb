<template>
  <div>
    <shopcarItem></shopcarItem>
  </div>
</template>

<script>
import shopcarItem from "./Shopcar_item.vue";
export default {
  components: { shopcarItem },
};
</script>

<style lang="less" scoped>
div {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
}
</style>