<template>
  <div class="scale-window">
    <div class="img-box"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >
      <img :src="imgSrc" alt="logo" />
    </div>
    <suspension-view
     pos="right"
     :src="imgSrc"
     :show="showSusView"
    >
    </suspension-view>
  </div>
</template>

<script>
import SuspensionView from '../components/SuspensionView'
export default {
  name: 'ScaleWindow',
  components: { SuspensionView },
  data () {
    return {
      targetEvent: null,
      imgSrc: '../assets/logo.png'
    }
  },
  mounted () {
  },
  methods: {
    onMouseOver (e) {
      console.log('mouse over')
      console.log(e)
    },
    onMouseLeave (e) {
      console.log('mouse leave')
    }
  }
}
</script>

<style lang="scss" scoped>
.scale-window {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-box {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    cursor: pointer;
    img {
      max-height: 100%;
      max-width: 100%;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
