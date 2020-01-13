<template>
  <div>
    <h3>表单组件</h3>
    {{ ruleForm.name }}
    {{ ruleForm.pwd }}
    <m-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <m-form-item label="用户名" prop="name">
        <m-input v-model="ruleForm.name"></m-input>
      </m-form-item>
      <m-form-item label="密码" prop="pwd">
        <m-input type="password" v-model="ruleForm.pwd"></m-input>
      </m-form-item>
      <m-form-item>
        <button type="password" @click="submitForm('ruleForm')">提交</button>
      </m-form-item>
    </m-form>
  </div>
</template>
<script>
import MInput from "../components/Input";
import MFormItem from "../components/FormItem";
import MForm from "../components/Form";
// 分析：
// Form负责数据模型添加校验规则
// FormItem绑定label prop校验和显示错误信息
// Input 实现双向数据绑定 通知FormItem做校验
export default {
  name: "form-component",
  data() {
    return {
      ruleForm: {
        name: "",
        pwd: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名" },
          { min: 6, max: 10, message: "请输入6-10位用户名" }
        ],
        pwd: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  components: {
    MInput,
    MFormItem,
    MForm
  },
  methods: {
    submitForm(name) {
      this.$refs[name].validate(valid => {
        console.log(valid);
        if (valid) {
          alert("验证成功，可以提交");
        } else {
          alert("验证出错 ");
          return false;
        }
      });
    }
  }
};
</script>
