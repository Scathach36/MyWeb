<template>
  <div class="shopcar_item">
    <div class="checkbox">
      <input type="checkbox" value="" />
    </div>
    <div class="item_img">
      <img src="" alt="" />
    </div>
    <div class="item_info">
      <h2 class="item_title">不知道什么玩意不知道什么玩意不知道什么玩意</h2>
      <div class="item_priceAndNum">
        <span class="item_price">114514</span>
        <span>另一个组件</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
    background-color: #eee;

    .item_title {
        flex: 2;
        font-size: 18px;
    }

    .item_priceAndNum {
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
  }
}
</style>