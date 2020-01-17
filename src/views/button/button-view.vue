<template>
  <div class="z-button-container">
    <div class="z-button-wrap">
      <z-button>默认按钮</z-button>
      <z-button type="primary">主要按钮</z-button>
      <z-button type="success">主要按钮</z-button>
      <z-button type="info">主要按钮</z-button>
      <z-button type="warning">主要按钮</z-button>
      <z-button type="danger">主要按钮</z-button>
    </div>
  </div>
</template>
<script>
import ZButton from "@/components/button/button";
export default {
  components: {
    ZButton
  }
};
</script>
<style lang="scss" scoped>
.z-button-wrap .z-button + .z-button {
  margin-left: 10px;
}
</style>
