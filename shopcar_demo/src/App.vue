<template>
  <div>
    <ShopcarHeader
      backgroundColor="red"
      color="white"
      title="购物车"
    ></ShopcarHeader>
    <div class="main">
      <ShopcarItem
        v-for="item in list"
        :key="item.id"
        :item="item"
        @changeNumber="changeNumberFn"
      ></ShopcarItem>
    </div>
    <ShopcarFooter @changeAll="allFn" :list="list"></ShopcarFooter>
  </div>
</template>

<script>
import ShopcarHeader from "./components/Shopcar_Header.vue";
import ShopcarFooter from "./components/Shopcar_Footer.vue";
import ShopcarItem from "./components/Shopcar_item.vue";

export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    allFn(flag) {
      this.list.forEach((item) => (item.goods_state = flag));
    },
    // 改变商品数量
    changeNumberFn(list) {
      this.list = list;
      console.log(this.list);
    },
  },
  components: { ShopcarHeader, ShopcarFooter, ShopcarItem },
  created() {
    this.$axios({
      url: "/api/cart",
    })
      .then((res) => {
        this.list = res.data.list;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>