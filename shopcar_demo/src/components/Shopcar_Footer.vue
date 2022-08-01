<template>
  <footer>
    <!-- 全选 -->
    <div class="checkbox">
      <label>
        <input type="checkbox" value="" v-model="isAll" />
        全选
      </label>
    </div>
    <div>
      合计：<span id="totalPrice">{{ allPrice }}</span>
    </div>
    <div>
      <button type="button" class="btn btn-primary" id="confirmBtn">
        结算<span class="itemNumber">({{ allCount }})</span>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["list"],
  computed: {
    isAll: {
      set(val) {
        this.$emit("changeAll", val);
        console.log(this.LocalItem);
      },
      get() {
        return this.list.every((item) => item.goods_state === true);
      },
    },
    allCount() {
      return this.list.reduce((sum, item) => {
        if (item.goods_state === true) {
          sum += item.goods_count;
        }
        return sum;
      }, 0);
    },
    allPrice() {
      return this.list.reduce((sum, item) => {
        if (item.goods_state === true) {
          sum += item.goods_count * item.goods_price;
        }
        return sum;
      }, 0);
    },
  },
};
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
  background-color: #fff;

  #totalPrice {
    color: red;
    font-size: 18px;
  }
  #totalPrice::before {
    content: "￥";
  }

  #confirmBtn {
    height: 30px;
    font-size: 14px;
    line-height: 14px;
  }
}
</style>