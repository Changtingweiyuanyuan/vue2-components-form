<template>
  <div
    class="page-form container text-success bg-white border rounded shadow-lg position-relative"
  >
    <div
      class="h5 my-2 py-1 text-center text-gray-deep-dark bg-success-subtle rounded"
    >
      基本資料
    </div>
    <div class="d-flex gap-5 flex-column-reverse flex-sm-row">
      <div class="flex-grow-1">
        <div class="page-form__name d-flex gap-3 align-items-center">
          <div class="page-form__name__title h5">姓名</div>
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

        <div class="page-form__gender d-flex gap-3 align-items-start">
          <div class="page-form__gender__title h5">性別</div>
          <FormRadio
            v-model="form.gender"
            value="1"
            @change="radioChange"
            :color="'danger'"
          >
            male
          </FormRadio>
          <FormRadio
            v-model="form.gender"
            value="2"
            @change="radioChange"
            :color="'danger'"
          >
            female
          </FormRadio>
        </div>

        <div class="page-form__phone-number d-flex gap-3 align-items-center">
          <div class="page-form__phone-number__title h5">手機號碼</div>
          <FormInput
            v-model="form.phoneNumber"
            :placeholder="'phone number'"
            :clearable="true"
            :background-transparent="true"
          />
        </div>
      </div>
      <div
        class="page-form__avatar align-self-center bg-success-subtle d-flex align-items-end position-relative rounded-circle m-8"
      >
        <div class="rounded-circle overflow-hidden">
          <img src="@/assets/avatar.png" class="img-fluid" />
        </div>
      </div>
    </div>

    <div class="page-form__language d-flex align-items-start">
      <div class="page-form__language__title h5 me-3">語言能力</div>
      <div class="d-flex gap-3 flex-column">
        <div
          v-for="(language, index) in form.language.options"
          :key="index"
          class="d-flex flex-wrap"
        >
          <FormCheckbox
            v-model="form.language.values"
            :value="language"
            :color="'danger'"
          >
            {{ language.type }}
          </FormCheckbox>

          <div
            v-if="
              form.language.values
                .map((t) => String(t.value))
                .includes(String(language.value))
            "
            class="d-flex flex-wrap"
            :class="{
              'ms-3': language.value != form.language.options.length,
              'ms-sm-3': language.value == form.language.options.length,
            }"
          >
            <div
              v-if="String(language.value) === '4'"
              :style="{ 'flex-basis': '100%' }"
            >
              <FormInput
                v-show="
                  form.language.values.map((t) => String(t.value)).includes('4')
                "
                v-model="form.language.otherValue"
                class="page-form__language__other-value"
                :clearable="true"
                :background-transparent="true"
              />
            </div>

            <div v-for="(level, index) in form.language.levels" :key="index">
              <FormCheckbox
                v-model="form.language.levelValues[language.value]"
                class="me-3"
                :color="'success'"
                :value="level"
              >
                {{ level.type }}
              </FormCheckbox>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div
      class="h5 mt-2 mb-4 py-1 text-center text-gray-deep-dark bg-success-subtle rounded"
    >
      職缺相關
    </div>
    <div class="page-form__position d-flex align-items-start mb-7">
      <div class="page-form__position__title h5 me-3">應徵職位</div>
      <div class="d-flex flex-wrap">
        <FormRadio
          v-model="form.position"
          value="1"
          class="me-3"
          :color="'danger'"
          >前端工程師</FormRadio
        >
        <FormRadio
          v-model="form.position"
          value="2"
          class="me-3"
          :color="'danger'"
          >後端工程師</FormRadio
        >
        <FormRadio
          v-model="form.position"
          value="3"
          class="me-3"
          :color="'danger'"
          >全端工程師</FormRadio
        >
      </div>
    </div>

    <div class="page-form__phone-number d-flex gap-3 align-items-start">
      <div class="page-form__phone-number__title h5">相關工作年資</div>
      <FormDropdown
        :select-options="form.workExperienceYears.options"
        :placeholder="'勾選工作年資'"
        :select-type="'single'"
        :multi-value="form.workExperienceYears.values"
        :color="'success'"
        @change="workExperienceYearsDropdownChange"
      />
    </div>

    <div class="page-form__phone-number d-flex gap-3 align-items-start">
      <div class="page-form__phone-number__title h5">具備技能</div>
      <FormDropdown
        :select-options="form.skills.options"
        :placeholder="'勾選具備技能'"
        :select-type="'multiple'"
        :multi-value="form.skills.values"
        :color="'success'"
        @change="skillsDropdownChange"
      />
    </div>

    <div class="page-form__tools d-flex align-items-start">
      <div class="page-form__tools__title h5 me-3">使用工具</div>
      <div class="d-flex flex-wrap">
        <FormCheckbox
          v-for="(tool, index) in form.tools.options"
          v-model="form.tools.values"
          class="me-3"
          :key="index"
          :value="tool"
          :color="'danger'"
        >
          {{ tool.name }}
        </FormCheckbox>
        <FormInput
          v-show="form.tools.values.map((t) => String(t.value)).includes('6')"
          v-model="form.tools.otherValue"
          class="page-form__tools__other-value"
          :clearable="true"
          :background-transparent="true"
        />
      </div>
    </div>

    <div class="page-form__term d-flex align-items-start">
      <div class="page-form__term__title h5 me-3">上份工作任職期間</div>
      <div class="d-flex flex-wrap">
        <div class="d-flex">
          <FormInput
            v-model="form.term.startYear"
            class="page-form__term__start-year me-2"
            :clearable="true"
            :background-transparent="true"
          />
          <span class="page-form__term__unit t5 me-2">年</span>
          <FormDropdown
            class="page-form__term__month"
            :select-options="form.term.monthOptions"
            :placeholder="'月份'"
            :select-type="'single'"
            :multi-value="form.term.startMonth"
            :color="'success'"
            @change="termStartMonthDropdownChange"
          />
        </div>
        <span class="t5 mx-2 page-form__term__dash">～</span>
        <div class="d-flex">
          <FormInput
            v-model="form.term.endYear"
            class="page-form__term__end-year me-2"
            :clearable="true"
            :background-transparent="true"
          />
          <span class="page-form__term__unit t5 me-2">年</span>
          <FormDropdown
            class="page-form__term__month"
            :select-options="form.term.monthOptions"
            :placeholder="'月份'"
            :select-type="'single'"
            :multi-value="form.term.endMonth"
            :color="'success'"
            @change="termEndMonthDropdownChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  FormRadio,
  FormInput,
  FormDropdown,
  FormCheckbox,
} from "vue2-components";
export default {
  name: "PageForm",
  components: {
    FormRadio,
    FormInput,
    FormDropdown,
    FormCheckbox,
  },
  data() {
    return {
      form: {
        name: {
          firstName: "",
          lastName: "",
        },
        gender: "1",
        phoneNumber: "",
        language: {
          values: [],
          levelValues: [
            {
              1: [],
              2: [],
              3: [],
              4: [],
            },
          ],
          otherValue: "",
          options: [
            { type: "英文", value: "1" },
            { type: "日文", value: "2" },
            { type: "韓文", value: "3" },
            { type: "其他", value: "4" },
          ],
          levels: [
            { type: "聽", value: "1" },
            { type: "說", value: "2" },
            { type: "讀", value: "3" },
            { type: "寫", value: "4" },
          ],
        },
        position: "1",
        skills: {
          values: [],
          options: [
            { text: "php", value: "php" },
            { text: "laravel", value: "laravel" },
            { text: "javaScript", value: "javaScript" },
            { text: "jquery", value: "jquery" },
            { text: "vue", value: "vue" },
            { text: "react", value: "react" },
            { text: "angular", value: "angular" },
          ],
        },
        workExperienceYears: {
          values: [],
          options: [
            { text: "1年以內", value: "1" },
            { text: "1年-3年", value: "2" },
            { text: "3年-5年", value: "3" },
            { text: "5年以上", value: "4" },
            { text: "10年以上", value: "5" },
          ],
        },
        tools: {
          values: [],
          otherValue: "",
          options: [
            { name: "繪圖板", value: "1" },
            { name: "機械鍵盤", value: "2" },
            { name: "雙螢幕", value: "3" },
            { name: "平板", value: "4" },
            { name: "滑鼠", value: "5" },
            { name: "其他", value: "6" },
          ],
        },

        term: {
          startYear: "",
          endYear: "",
          startMonth: [],
          endMonth: [],
          monthOptions: [
            { text: "一月", value: "1" },
            { text: "二月", value: "2" },
            { text: "三月", value: "3" },
            { text: "四月", value: "4" },
            { text: "五月", value: "5" },
            { text: "六月", value: "6" },
            { text: "七月", value: "7" },
            { text: "八月", value: "8" },
            { text: "九月", value: "9" },
            { text: "十月", value: "10" },
            { text: "十一月", value: "11" },
            { text: "十二月", value: "12" },
          ],
        },
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
    skillsDropdownChange(values) {
      if (!values) return;
      this.form.skills.values = values;
    },
    workExperienceYearsDropdownChange(values) {
      if (!values) return;
      this.form.workExperienceYears.values = values;
    },
    termStartMonthDropdownChange(values) {
      if (!values) return;
      this.form.term.startMonth = values;
    },
    termEndMonthDropdownChange(values) {
      if (!values) return;
      this.form.term.endMonth = values;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-form {
  &::before,
  &::after {
    display: none;
    content: "";
    position: absolute;
    background-size: contain;
    @include media-breakpoint-up(sm) {
      display: block;
    }
  }

  &::before {
    background-image: url("@/assets/vintage-coffee-1.png");
    width: 100px;
    height: 100px;
    top: -50px;
    left: 4px;
    transform: rotate(30deg);
    filter: drop-shadow(1px 1px 0px $black);
  }

  &::after {
    background-image: url("@/assets/vintage-coffee-2.png");
    width: 150px;
    height: 150px;
    bottom: -55px;
    right: -64px;
    transform: rotate(182deg);
    filter: drop-shadow(-1px -1px 0px #0c0c0c);
  }

  &__name,
  &__gender,
  &__phone-number,
  &__language,
  &__position,
  &__tools,
  &__term {
    &__title {
      word-break: keep-all;
    }
  }

  &__tools,
  &__language {
    min-height: 60px;
    &__other-value {
      width: 200px !important;
    }
  }

  &__term {
    &__dash,
    &__unit {
      line-height: 38px;
    }
    &__month {
      width: 80px !important;
      word-break: keep-all;
    }
  }

  &__avatar {
    width: 160px;
    height: 160px;
    &::after {
      content: "";
      width: 250px;
      height: 250px;
      background-image: url("@/assets/avatar-border.png");
      background-size: contain;
      position: absolute;
      transform: translate(-45px, 45px);
    }

    > div {
      width: 160px;
      height: 160px;
    }
  }
}
</style>
