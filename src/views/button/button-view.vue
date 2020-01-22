<template>
  <div class="z-button-container">
    <div class="z-button-wrap">
      <div class="z-row">
        <z-button @click="handleClickTest">默认按钮</z-button>
        <z-button type="primary" size="medium" autofocus>主要按钮</z-button>
        <z-button type="success" size="small">主要按钮</z-button>
        <z-button type="info" size="mini">主要按钮</z-button>
        <z-button type="warning">主要按钮</z-button>
        <z-button type="danger">主要按钮</z-button>
      </div>
      <div class="z-row">
        <z-button plain>默认按钮</z-button>
        <z-button type="primary" :loading="loading" plain icon="z-icon-edit">
          主要按钮
          <i class="z-icon-edit z-icon--right"></i>
        </z-button>
        <z-button type="success" plain>主要按钮</z-button>
        <z-button type="info" plain>主要按钮</z-button>
        <z-button type="warning" plain>主要按钮</z-button>
        <z-button type="danger" plain>主要按钮</z-button>
      </div>
      <div class="z-row">
        <z-button circle></z-button>
        <z-button
          type="primary"
          :loading="loading"
          size="small"
          circle
          icon="z-icon-edit"
        ></z-button>
        <z-button type="success" size="medium" circle></z-button>
        <z-button type="info" size="small" circle></z-button>
        <z-button type="warning" size="mini" circle></z-button>
        <z-button type="danger" circle></z-button>
      </div>
      <div class="z-row">
        <z-button round>默认按钮</z-button>
        <z-button type="primary" size="medium" round> 主要按钮</z-button>
        <z-button type="success" size="small" round>主要按钮</z-button>
        <z-button type="info" round>主要按钮</z-button>
        <z-button type="warning" round>主要按钮</z-button>
        <z-button type="danger" round>主要按钮</z-button>
      </div>
      <div class="z-row">
        <z-button @click="handleClickTest" disable>默认按钮</z-button>
        <z-button type="primary" disable> 主要按钮</z-button>
        <z-button type="success" disable>主要按钮</z-button>
        <z-button type="info" disable>主要按钮</z-button>
        <z-button type="warning" disable>主要按钮</z-button>
        <z-button type="danger" disable>主要按钮</z-button>
      </div>
      <div class="z-row">
        <z-button type="text" disable>默认按钮</z-button>
        <z-button type="text">默认按钮</z-button>
      </div>
      <div class="z-row">
        <z-button-group>
          <z-button type="primary">首页</z-button>
        </z-button-group>
        <z-button-group>
          <z-button type="primary">上一页</z-button>
          <z-button type="primary">下一页</z-button>
        </z-button-group>
        <z-button-group>
          <z-button type="danger">上一页</z-button>
          <z-button type="danger">下一页</z-button>
          <z-button type="danger">下一页</z-button>
        </z-button-group>
        <z-button-group>
          <z-button type="success">上一页</z-button>
          <z-button type="success">下一页</z-button>
          <z-button type="success">下一页</z-button>
        </z-button-group>
        <z-button-group>
          <z-button type="info">上一页</z-button>
          <z-button type="info">下一页</z-button>
          <z-button type="info">下一页</z-button>
        </z-button-group>
        <z-button-group>
          <z-button type="warning">上一页</z-button>
          <z-button type="warning">下一页</z-button>
          <z-button type="warning">下一页</z-button>
        </z-button-group>
        <z-button-group>
          <z-button type="warning" plain>上一页</z-button>
          <z-button type="warning" plain>下一页</z-button>
          <z-button type="warning" plain>下一页</z-button>
        </z-button-group>
        <z-button-group>
          <z-button type="warning" circle></z-button>
          <z-button type="warning" circle></z-button>
          <z-button type="warning" circle></z-button>
        </z-button-group>
        <z-button-group>
          <z-button type="warning" round>上一页</z-button>
          <z-button type="warning" round>下一页</z-button>
          <z-button type="warning" round>下一页</z-button>
        </z-button-group>
        <z-button-group>
          <z-button>上一页</z-button>
          <z-button>下一页</z-button>
          <z-button>下一页</z-button>
        </z-button-group>
      </div>
      <div class="z-row">
        <z-button @click="handleClickTest" :loading="loading"
          >默认按钮</z-button
        >
        <z-button type="primary" :loading="loading">主要按钮</z-button>
        <z-button type="success">主要按钮</z-button>
        <z-button type="info">主要按钮</z-button>
        <z-button type="warning">主要按钮</z-button>
        <z-button type="danger">主要按钮</z-button>
      </div>
      <div class="z-row">
        <z-button autofocus>默认按钮</z-button>
        <z-button native-type="submit">提交按钮</z-button>
        <z-button native-type="reset" type="primary">重置按钮</z-button>
      </div>
    </div>
  </div>
</template>
<script>
import ZButton from "@/components/button/button";
import ZButtonGroup from "@/components/button-group/button-group";
export default {
  name: "ZButtonView",
  data() {
    return {
      loading: true
    };
  },
  components: {
    ZButton,
    ZButtonGroup
  },
  methods: {
    handleClickTest() {
      this.loading = !this.loading;
    }
  }
};
</script>
<style lang="scss" scoped>
.z-button-wrap .z-row {
  margin-bottom: 20px;
}
.z-button-wrap .z-button + .z-button {
  margin-left: 10px;
}
.z-button-wrap .z-button-group + .z-button-group {
  margin-left: 10px;
}
.z-button-wrap .z-button-group .z-button {
  margin-left: 0;
}
.z-button-wrap .z-button-group {
  margin-bottom: 10px;
}
</style>
