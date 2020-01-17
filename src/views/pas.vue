<template>
  <div>
    <h3>表单组件</h3>
    {{ ruleForm.name }}
    {{ ruleForm.pwd }}
    <input type="password" style="display: none;" />
    <m-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <m-form-item label="用户名" prop="name">
        <input v-model="ruleForm.name" type="text" autocomplete="off" />
      </m-form-item>
      <m-form-item label="密码" prop="pwd">
        <input type="text" id="pwd" name="password" password="" />
      </m-form-item>
      <m-form-item>
        <button type="password" @click="submitForm('ruleForm')">提交</button>
      </m-form-item>
    </m-form>
  </div>
</template>
<script>
// import MInput from "../components/Input";
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
      pwd2: "",
      // arr5: "",
      // addstr: "",
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
    // MInput,
    MFormItem,
    MForm
  },
  mounted() {
    this.getNum();
  },
  methods: {
    getNum() {
      let inP = document.querySelector("#pwd");
      inP.addEventListener("input", function() {
        let newPwd = this.value;
        let oldPwd = this.getAttribute("password");
        let resPwd = "";
        let pos = this.selectionEnd;
        for (let i = 0; i < newPwd.length; i++) {
          let str = newPwd.charAt(i);
          if (i < pos && str != "●") {
            resPwd += str;
          } else if (i < pos && str == "●") {
            resPwd += oldPwd.charAt(i);
          } else {
            resPwd += oldPwd.substr(
              oldPwd.length - newPwd.length + pos,
              newPwd.length - pos
            );
            break;
          }
        }
        newPwd = resPwd.replace(/\S/g, "●");
        this.setAttribute("password", resPwd);
        this.value = newPwd;
        this.selectionEnd = pos;
        this.selectionStart = pos;
        console.log(resPwd); //这个放在表单里作为密码提交
      });
    }
    // getNum(e) {
    //   let arr = e.target.value.split("");
    //   let arr2 = [];
    //   let arr3 = [];
    //   if (!this.pwd2) {
    //     this.pwd2 = e.target.value;
    //   }
    //   switch (this.ruleForm.pwd.length) {
    //     case 0:
    //       this.pwd2 = "";
    //       break;
    //     case 1:
    //       // console.log(this.addstr);
    //       // console.log(this.pwd2);
    //       this.pwd2 = this.pwd2.slice(0, 1);
    //       break;
    //     default:
    //       this.arr5 = this.pwd2.slice(0, this.ruleForm.pwd.length);
    //       this.arr5 += e.target.value.replace(/•/g, "");
    //       this.pwd2 = this.arr5;
    //   }
    //   arr.forEach(() => {
    //     arr2.push("•");
    //   });
    //   arr3 = [...arr, ...arr2];
    //   this.ruleForm.pwd = arr3
    //     .join("")
    //     .slice(arr3.join("").length / 2, arr3.join("").length);
    // }
  }
};
</script>
