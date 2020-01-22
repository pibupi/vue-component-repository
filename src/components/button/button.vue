<template>
  <button
    :autofocus="autofocus"
    :type="nativeType"
    :disabled="disable || loading"
    class="z-button"
    :class="[
      `z-button-- + ${type}`,
      buttonSizeClass,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disable,
        'is-loading': loading
      }
    ]"
    @click="handleClick"
  >
    <i v-if="loading" class="z-icon-loading"></i>
    <i v-if="!loading && icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "ZButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    nativeType: {
      type: String,
      default: "button",
      validator: value => {
        return ["button", "reset", "submit"].indexOf(value) !== -1;
      }
    },
    autofocus: Boolean,
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    loading: Boolean,
    icon: String,
    size: {
      type: String,
      validator: value => {
        return ["medium", "small", "mini"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    buttonSizeClass() {
      if (this.size) {
        return "z-button--" + this.size;
      }
      return null;
    }
  },
  methods: {
    handleClick(event) {
      // if (this.$props.disable) {
      //   console.log("disable");
      //   return;
      // }
      this.$emit("click", event);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../theme/components/button.scss";
</style>
