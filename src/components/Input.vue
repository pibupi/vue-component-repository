<template>
  <div>
    <!-- v-model 是v-bind:value v-on:input的语法糖 -->
    <input :type="type" :value="inputValue" @input="handleInput" />
  </div>
</template>
<script>
export default {
  name: "input-comp",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  methods: {
    handleInput(e) {
      // 赋值
      // 实现双向数据绑定
      this.inputValue = e.target.value;
      this.$emit("input", this.inputValue);
      // 通知父组件值的校验
      this.$parent.$emit("validate", this.inputValue);
    }
  }
};
</script>
