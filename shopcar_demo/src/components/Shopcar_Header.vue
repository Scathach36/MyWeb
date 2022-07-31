<template>
  <header>
    <p class="header" :style="{backgroundColor, color}">{{title}}</p>
  </header>
</template>

<script>
export default {
  props: {
    backgroundColor: String, // 背景色-字符串类型
    color: {
      type: String, // 文字颜色-字符串类型
      default: "#fff", // 默认颜色
    }, 
    title: { // 标题内容-字符串类型，必须传值
      type: String,
      require: true, 
    }
  },
};
</script>

<style lang="less" scoped>
.header {
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  letter-spacing: 8px;
  text-align: center;
  background-color: rgb(54, 122, 224);
  color: #fff;
}
</style>