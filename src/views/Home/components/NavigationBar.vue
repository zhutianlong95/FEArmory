<template>
  <div class="navigation-bar">
    <div
      class="nav-item"
      v-for="(item, index) in navBar"
      :key="index"
      @click="jumpTo(item.path)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      navBar: [
        {
          name: 'FEArmory',
          path: '/fe-armory'
        },
        {
          name: 'Games',
          path: '/games'
        }
      ]
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
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-image: linear-gradient( 135deg, #FFF3B0 10%, #CA26FF 100%);;
}
</style>
