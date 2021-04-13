<template>
  <div class="card-drag">
    <!-- 源区域 -->
    <div class="source-area">
      <div
        v-for="(item, index) in [1, 2, 3, 4, 5]"
        :key="index"
        class="card"
        :style="{
          top: index * 10 + 'px',
          left: index * 10 + 'px',
          zIndex: index + 1,
          backgroundColor: colors[index]
        }"
      >
      </div>
    </div>
    <!-- 目标区域 -->
    <div class="target-area"></div>
  </div>
</template>

<script>
export default {
  name: 'CardDrag',
  data () {
    return {
      colors: ['#845ec2', '#ffc75f', '#f9f871', '#ff5e78', '#75cfb8']
    }
  },
  mounted () {
    document.addEventListener('mousedown', this.onMouseDown)
  },
  methods: {
    onMouseDown (e) {
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    },
    onMouseMove (e) {
      console.log(e)
    },
    onMouseUp (e) {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-drag {
  position: relative;
  .source-area, .target-area {
    display: inline-block;
    width: 220px;
    height: 300px;
    border: 1px solid orange;
    position: absolute;
  }
  .source-area {
    top: 100px;
    left: 100px;
    border: 1px solid orange;
  }
  .target-area {
    top: 100px;
    left: 500px;
    border: 1px solid skyblue;
  }
  .card {
    position: absolute;
    border: 1px solid black;
    display: inline-block;
    width: 220px;
    height: 300px;
  }
}
</style>
