<template>
  <div class="page-form container text-success h5">
    <div class="page-form__name d-flex gap-3 align-items-center">
      <div class="page-form__name__title">姓名</div>
      <FormInput
        v-model="form.name.firstName"
        :placeholder="'first name'"
        :clearable="true"
        :background-transparent="true"
        @inputValue="inputChange"
        @inputEvent="inputEventHandler"
      />
      <FormInput
        v-model="form.name.lastName"
        :placeholder="'last name'"
        :clearable="true"
        :background-transparent="true"
      />
    </div>

    <div class="page-form__gender d-flex gap-3 align-items-center">
      <div class="page-form__gender__title">性別</div>
      <FormRadio
        v-model="form.gender"
        value="1"
        :color="'success'"
        @change="radioChange"
      >
        male
      </FormRadio>
      <FormRadio v-model="form.gender" value="2" @change="radioChange">
        female
      </FormRadio>
    </div>

    <div class="page-form__phone-number d-flex gap-3 align-items-center">
      <div class="page-form__phone-number__title">電話</div>
      <FormInput
        v-model="form.phoneNumber"
        :placeholder="'phone number'"
        :clearable="true"
        :background-transparent="true"
      />
    </div>
  </div>
</template>

<script>
import { FormRadio, FormInput } from "vue2-components";
export default {
  name: "PageForm",
  components: {
    FormRadio,
    FormInput,
  },
  data() {
    return {
      form: {
        name: {
          firstName: "",
          lastName: "",
        },
        gender: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    radioChange(value) {
      console.log("radioChange", value);
    },
    inputChange(inputValue) {
      console.log("onInput value", inputValue);
    },
    inputEventHandler(inputEvent) {
      console.log("onInput event", inputEvent);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-form {
  // background: $success;

  &__name,
  &__gender,
  &__phone-number {
    &__title {
      word-break: keep-all;
    }
  }
}
</style>
