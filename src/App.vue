<template>
  <div id="app" class="app">
    <home></home>
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  name: 'App',
  components: {
    Home
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
