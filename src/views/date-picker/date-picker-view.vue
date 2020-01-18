<template>
  <div class="z-date-pickder-container">
    <!-- <z-date-picker :value="now" @input="val => (value = val)"></z-date-picker> -->
    <z-date-picker v-model="now"></z-date-picker>
  </div>
</template>
<script>
import ZDatePicker from "@/components/date-picker/date-picker";
export default {
  name: "ZDatePickerView",
  data() {
    return {
      now: new Date()
    };
  },
  components: {
    ZDatePicker
  }
};
</script>
