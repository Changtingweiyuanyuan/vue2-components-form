<template>
  <div class="base">
    <FormRadio v-model="radioValue" value="1" @change="radioChange">
      1
    </FormRadio>
    <FormRadio v-model="radioValue" value="2" @change="radioChange">
      2
    </FormRadio>
  </div>
</template>

<script>
import { FormRadio } from "vue2-components";
export default {
  name: "PageBase",
  components: {
    FormRadio,
  },
  data() {
    return {
      radioValue: "",
    };
  },
  methods: {
    radioChange(value) {
      console.log("radioChange", value);
    },
  },
};
</script>

<style scoped></style>
