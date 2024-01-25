<template>
  <div id="app">
    <div class="px-10 py-8">
      <div class="links t5">
        <router-link class="router-link" to="/">FORM</router-link> |
        <router-link class="router-link" to="/news">NEWS</router-link>
      </div>
      <router-view />
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
  background-image: url("assets/bg.jpeg");
  background-size: cover;
  min-height: 100vh;
  max-height: 100%;
  overflow: hidden;

  .links {
    margin-bottom: 60px;
  }
}
</style>
