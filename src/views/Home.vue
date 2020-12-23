<template>
  <div class="home">
    <navigation-bar></navigation-bar>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: { NavigationBar }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  .main-content {
    flex: 1;
  }
}

</style>
