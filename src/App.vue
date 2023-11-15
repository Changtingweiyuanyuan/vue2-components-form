<template>
  <div id="app">
    <div class="p-3">
      <router-link class="router-link" to="/">FORM</router-link>
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

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: $secondary-bg-subtle;
  height: 100vh;
}
</style>
