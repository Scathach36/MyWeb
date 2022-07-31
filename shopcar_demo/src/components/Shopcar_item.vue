<template>
  <div class="shopcar_item">
    <div class="checkbox">
      <input type="checkbox" value="" />
    </div>
    <div class="item_img">
      <img src="" alt="" />
    </div>
    <div class="item_info">
      <h2 class="item_title">12345</h2>
      <div class="item_priceAndNum">
        <span class="item_price">114514</span>
        <span>
          <ShopcarNumber></ShopcarNumber>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ShopcarNumber from './Shopcar_Number.vue';
export default {
  components:{ShopcarNumber}
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

        .item_price {
          margin-right: 10px;
        }
    }
  }
}
</style>