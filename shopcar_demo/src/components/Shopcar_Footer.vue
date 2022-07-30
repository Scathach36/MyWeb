<template>
  <footer>
    <!-- 全选 -->
    <div class="checkbox">
      <label>
        <input type="checkbox" value="" />
        全选
      </label>
    </div>
    <div>合计：<span id="totalPrice">114514</span></div>
    <div>
      <button type="button" class="btn btn-primary" id="confirmBtn">
        结算<span class="itemNumber">(22)</span>
      </button>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 10px;
  min-height: 40px;
  font-size: 12px;
  width: 100%;
  border-top: 1px solid #eee;

  #totalPrice {
    color:red;
    font-size: 18px;
  }
  #totalPrice::before{
    content: '￥';
  }

  #confirmBtn {
    height: 30px;
    font-size: 14px;
    line-height: 14px;
  }
}
</style>