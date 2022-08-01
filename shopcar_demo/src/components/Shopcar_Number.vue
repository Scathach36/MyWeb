<template>
  <span>
    <button
      type="button"
      class="btn btn-default minus"
      @click="changeNumber_minus"
    >
      -
    </button>
    <input type="text" class="item_number" v-model.number="LocalItem.goods_count" />
    <button
      type="button"
      class="btn btn-default plus"
      @click="changeNumber_add"
    >
      +
    </button>
  </span>
</template>

<script>
export default {
  data() {
    return {
      LocalItem: this.item,
    };
  },
  props: {
    item: Object,
  },
  watch: {
    LocalItem: {
      deep: true,
      handler() {
        if (this.LocalItem.goods_count < 1) {
          this.LocalItem.goods_count = 1
        }
        this.$emit('changeNumberFn',this.LocalItem)
      },
    },
  },
  methods: {
    changeNumber_minus(){
      this.LocalItem.goods_count === 1 ? 1 : this.LocalItem.goods_count--
    },
    changeNumber_add(){
      this.LocalItem.goods_count++
    }
  }
};
</script>

<style scoped>
.item_number {
  display: inline-block;
  width: 40px;
}
input {
  text-align: center;
}
</style>