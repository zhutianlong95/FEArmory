<template>
  <div
    id="suspension-view"
    class="suspension-view"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
    v-show="showView"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave">
    <div class="suspension-view-box">
      <img
        id="suspension-view-img"
        class="suspension-view-img"
        :src="src"
        alt=""
        draggable="false"
      />
      <div class="tools">
        <i class="iconfont fe_armoryic_zoomin" @click="scaleAdd"></i>
        <i class="iconfont fe_armoryic_zoomout" @click="scaleLess"></i>
        <i class="iconfont fe_armoryls_function_refresh" @click="resetImg"></i>
        <i class="iconfont fe_armoryic_repeal" @click="antiClockWise"></i>
        <i class="iconfont fe_armoryic_renew" @click="clockWise"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Suspension',
  props: {
    width: { type: Number, default: null },
    height: { type: Number, default: null },
    src: { type: String, default: '' },
    event: { type: MouseEvent, default: () => {} }
  },
  data () {
    return {
      showView: false, // 是否显示组件
      viewDom: null, // 组件dom对象
      imgDom: null,
      onSelf: false, // 鼠标是否在自己上
      onTarget: false, // 鼠标是否在目标上
      startX: null,
      startY: null,
      offsetTop: 0,
      offsetLeft: 0,
      baseScale: 1,
      rotateDeg: 0,
      originalHeight: null,
      originalWidth: null
    }
  },
  watch: {
    event (e) {
      if (e) {
        this.onTarget = true
        this.handleEvent(e)
      } else {
        this.onTarget = false
        this.cancelEvent(e)
      }
    },
    src (v) {
      const img = new Image()
      img.src = v
      this.originalHeight = img.height
      this.originalWidth = img.width
    }
  },
  mounted () {
    if (!this.width && !this.height) this.useOriginalSize()
    this.viewDom = document.querySelector('#suspension-view')
    this.imgDom = document.querySelector('#suspension-view-img')
    this.imgDom.addEventListener('mousedown', this.onMouseDown)
  },
  methods: {
    /**
     * 没有规定悬浮框宽高的时候，使用图片原始尺寸
     */
    useOriginalSize () {
      this.width = this.originalWidth
      this.height = this.originalHeight
    },
    handleEvent (e) {
      this.showView = true
      if (!this.viewDom) {
        this.viewDom = document.querySelector('#suspension-view')
      }
      const targetWidth = parseInt(window.getComputedStyle(e.target).width, 10)
      this.viewDom.style.left = e.target.getBoundingClientRect().left + targetWidth + 'px'
      this.viewDom.style.top = e.target.getBoundingClientRect().top + 'px'
    },
    cancelEvent (e) {
      if (!this.onSelf || !this.onTarget) {
        this.showView = false
      }
    },
    onMouseOver (e) {
      this.onSelf = true
      this.showView = true

      this.viewDom.addEventListener('wheel', this.onWheel)
    },
    onMouseLeave (e) {
      this.onSelf = false
      this.removeListeners()
      this.resetImg()
      // 鼠标不在自己身上，也不在target身上，就消失
      if (!this.onSelf || !this.onTarget) {
        this.showView = false
      }
    },
    onMouseDown (e) {
      // 每次开始拖拽，记录当前【最新】位移开始时的鼠标位置和图片位置
      this.startX = e.clientX
      this.startY = e.clientY
      this.offsetTop = e.target.offsetTop
      this.offsetLeft = e.target.offsetLeft

      this.imgDom.addEventListener('mousemove', this.onMouseMove)
      this.imgDom.addEventListener('mouseup', this.onMouseUp)
    },
    onMouseMove (e) {
      // 得到鼠标在X方向和Y方向的位移距离,正负代表位移方向
      const dx = e.clientX - this.startX
      const dy = e.clientY - this.startY
      // 计算dom的位移位置：当前位置 + 位移距离（鼠标的位移距离）
      this.imgDom.style.left = this.offsetLeft + dx + 'px'
      this.imgDom.style.top = this.offsetTop + dy + 'px'
    },
    onMouseUp (e) {
      this.removeListeners()
    },
    removeListeners () {
      this.imgDom.removeEventListener('mousemove', this.onMouseMove)
      this.imgDom.removeEventListener('mouseup', this.onMouseUp)
      this.viewDom.removeEventListener('wheel', this.onWheel)
    },
    onWheel (e) {
      const val = -e.deltaY / 1000
      this.baseScale += val
      if (this.baseScale < 0.1) this.baseScale = 0.1
      this.updateTrasnform(this.baseScale, this.rotateDeg)
    },
    updateTrasnform (scale, deg) {
      if (this.imgDom) {
        this.imgDom.style.transform = `scale(${scale}) rotate(${deg}deg)`
      }
    },
    scaleAdd () {
      if (this.imgDom) {
        this.baseScale += 0.1
        this.updateTrasnform(this.baseScale, this.rotateDeg)
      }
    },
    scaleLess () {
      if (this.imgDom) {
        this.baseScale += -0.1
        if (this.baseScale < 0.1) this.baseScale = 0.1
        this.updateTrasnform(this.baseScale, this.rotateDeg)
      }
    },
    clockWise () {
      this.rotateDeg += 45
      this.updateTrasnform(this.baseScale, this.rotateDeg)
    },
    antiClockWise () {
      this.rotateDeg += -45
      this.updateTrasnform(this.baseScale, this.rotateDeg)
    },
    resetImg () {
      this.baseScale = 1
      this.rotateDeg = 0
      this.startX = null
      this.startY = null
      this.offsetTop = 0
      this.offsetLeft = 0
      if (this.imgDom) {
        this.imgDom.style.top = 0
        this.imgDom.style.left = 0
      }
      this.updateTrasnform(this.baseScale, this.rotateDeg)
    }
  }
}
</script>

<style lang="scss" scoped>
.suspension-view {
  position: fixed;
  width: 400px;
  height: 300px;
  box-shadow: 0 0 15px #888;
  .suspension-view-box {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .suspension-view-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    }
    .tools {
      position: absolute;
      bottom: 10px;
      left: 20%;
      width: 60%;
      height: 40px;
      line-height: 40px;
      border-radius: 40px;
      display: flex;
      justify-content: space-around;
      background-color: rgba($color: #000000, $alpha: .7);
      & > i {
        color: #fff;
        font-size: 20px;
        &:hover {
          color: orange;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
