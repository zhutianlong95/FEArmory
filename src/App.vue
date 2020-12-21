<template>
  <div id="app" class="app">
    <navigation-bar></navigation-bar>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
