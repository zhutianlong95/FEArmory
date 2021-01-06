<template>
  <div class="navigation-bar">
    <div @click="jumpTo('/scaleWindow')">
      ScaleWindow
    </div>
    <div @click="jumpTo('/counterView')">
      Counter
    </div>
    <div @click="jumpTo('/timeBoardView')">
      TimeBoard
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {

    }
  },
  methods: {
    jumpTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.navigation-bar {
  display: flex;
  flex-direction: column;
  width: 170px;
  height: 100vh;
  background-image: linear-gradient( 135deg, #FFF3B0 10%, #CA26FF 100%);;
}
</style>
