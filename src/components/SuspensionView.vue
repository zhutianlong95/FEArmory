<template>
  <div
    id="suspension-view"
    class="suspension-view"
    :style="{width: width + 'px', height: height + 'px'}"
    v-show="showView"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave">
    <div class="suspension-view-box">
      <img id="suspension-view-img" class="suspension-view-img" :src="src" alt="" draggable="false"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuspensionView',
  props: {
    width: { type: Number, default: 300 },
    height: { type: Number, default: 400 },
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
      offsetLeft: 0
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
    }
  },
  mounted () {
    this.viewDom = document.querySelector('#suspension-view')
    this.imgDom = document.querySelector('#suspension-view-img')
    this.imgDom.addEventListener('mousedown', this.onMouseDown)
  },
  methods: {
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
    },
    onMouseLeave (e) {
      this.onSelf = false
      // 鼠标不在自己身上，也不在target身上，就消息
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
      this.imgDom.removeEventListener('mousemove', this.onMouseMove)
      this.imgDom.removeEventListener('mouseup', this.onMouseUp)
    }
  }
}
</script>

<style lang="scss" scoped>
.suspension-view {
  position: fixed;
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  cursor: pointer;
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
  }
}
</style>
