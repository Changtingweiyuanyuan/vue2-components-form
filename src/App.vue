<template>
  <div id="app">
    <div class="d-flex flex-column gap-10">
      <div class="header t5 py-1 px-3">
        <div class="container">
          <router-link class="router-link text-white me-4" to="/">表單範例</router-link>
          <router-link class="router-link text-white" to="/news">報章雜誌範例</router-link>
        </div>
      </div>
      <div class="main-visual container">
        <router-view />
      </div>
      <div class="footer t5 py-1 px-3 text-center text-white">
        <span>Chelsea Chang's Creation</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "vue2-components.styles/global.import.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url("assets/texture.png");
  background-size: cover;
  background-repeat: repeat;
  background-color: #5e7c6050;
  min-height: 100vh;
  max-height: 100%;
  overflow: hidden;

  .header, .footer {
    background: $gray-900;
  }

  .main-visual {
    max-width: 936px;
  }
}
</style>
