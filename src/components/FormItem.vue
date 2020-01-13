<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <!-- 槽 -->
    <slot></slot>
    <!-- 显示校验的错误信息 -->
    <p v-if="validateStatus === 'error'" class="error">{{ errorMessage }}</p>
  </div>
</template>
<script>
// 0.绑定lanel  prop
// 1.获取当前输入框的规则
// 2.如果输入框和rule不匹配，显示错误信息
// 3.input组件中用户输入内容时，通知formitem做校验（校验的方法）
// 4.使用async-validator做校验
import schema from "async-validator";
export default {
  name: "formitem",
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      // name  pwd
      type: String,
      default: ""
    }
  },
  created() {
    this.$on("validate", this.validate);
  },
  mounted() {
    if (this.prop) {
      // 必须判断，因为form组件的子租金按可能不是formitem
      this.$parent.$emit("formItemAdd", this);
    }
  },
  data() {
    return {
      validateStatus: "", // 校验的状态值
      errorMessage: "" // 显示的错误信息
    };
  },
  methods: {
    validate(value) {
      return new Promise(resolve => {
        // console.log(value); // 输入框的值
        // 此对象要存储校验规则
        // let descriptor = {};
        // 获取校验对象
        // descriptor[this.prop] = this.form.rules[this.prop];
        const descriptor = {
          [this.prop]: this.form.rules[this.prop]
        };
        const validator = new schema(descriptor);
        let obj = {};
        obj[this.prop] = value;
        validator.validate(obj, errors => {
          if (errors) {
            // 显示错误
            this.validateStatus = "error";
            this.errorMessage = errors[0].message;
            resolve(false);
          } else {
            // 错误置空
            this.validateStatus = "";
            this.errorMessage = "";
            resolve(true);
          }
        });
      });
    }
  }
};
</script>
<style scoped>
.error {
  color: red;
}
</style>
