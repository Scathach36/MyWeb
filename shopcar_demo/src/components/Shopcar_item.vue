<template>
  <div class="shopcar_item">
    <div class="checkbox">
      <input
        type="checkbox"
        v-model="LocalItem.goods_state"
        :id="LocalItem.id"
      />
    </div>
    <div class="item_img">
      <label :for="LocalItem.id"><img :src="LocalItem.goods_img" /></label>
    </div>
    <div class="item_info">
      <h2 class="item_title">{{ LocalItem.goods_name }}</h2>
      <div class="item_priceAndNum">
        <span class="item_price">{{ LocalItem.goods_price }}</span>
        <span>
          <ShopcarNumber :item="item"></ShopcarNumber>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ShopcarNumber from "./Shopcar_Number.vue";
export default {
  data() {
    return {
      LocalItem: this.item,
    };
  },
  components: { ShopcarNumber },
  props: {
    item: Object,
  },
};
</script>

<style lang="less" scoped>
.shopcar_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 6px;
  width: 100%;
  height: 180px;
  border-bottom: 1px solid #eee;

  .item_img {
    width: 150px;
    height: 150px;
    margin: 0 6px;
    background-color: pink;
    border-radius: 10px;
    label {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }

  .item_info {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 150px;

    .item_title {
      flex: 2;
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .item_priceAndNum {
      flex: 1;
      display: flex;
      justify-content: start;
      align-items: center;
      color: red;

      .item_price {
        margin-right: 10px;
      }

      .item_price::before {
        content: "￥";
      }
    }
  }
}
</style>