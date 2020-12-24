<template>
  <div class="scale-window">
    <div class="img-box"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >
      <img :src="imgSrc" alt="logo" />
    </div>
    <suspension-view
     :src="imgSrc"
     :event="targetEvent"
     :width="500"
     :height="500"
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
      imgSrc: '',
      showSusView: false // 浮窗显示
    }
  },
  mounted () {
    this.imgSrc = require('../assets/logo.png')
  },
  methods: {
    onMouseOver (e) {
      this.targetEvent = e
    },
    onMouseLeave (e) {
      this.targetEvent = null
    }
  }
}
</script>

<style lang="scss" scoped>
.scale-window {
  height: 100%;
  width: 100%;
  position: relative;
  .img-box {
    position: absolute;
    top: 200px;
    left: 100px;
    width: 100px;
    height: 100px;
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
