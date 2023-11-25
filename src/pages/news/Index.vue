<template>
  <div class="page-news container border rounded shadow-lg px-2 py-6">
    <UtilityHeadline
      :text="'Gaza Ministry of Health report describes crumbling health system'"
      :superscript="'headline'"
      :superscript-background-color="'bg-dark'"
      class="text-dark"
    />
  </div>
</template>

<script>
import {
  UtilityHeadline,
  // UtilityOrderedList,
  // UtilityParagraph,
  // UtilityContainer,
} from "vue2-components";

export default {
  name: "PageNews",
  components: {
    UtilityHeadline,
    // UtilityOrderedList,
    // UtilityParagraph,
    // UtilityContainer,
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
            { type: "基礎", value: "1" },
            { type: "中級", value: "2" },
            { type: "精通", value: "3" },
            { type: "母語", value: "4" },
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
  methods: {},
};
</script>

<style lang="scss" scoped>
$theme-bg: #d5ab69;
.page-news {
  background-image: url("assets/news/bg.png");
  background-size: 150% 120%;
  background-position: center;
  background-color: $theme-bg;
  min-height: 100vh;
}
</style>
