<template>
  <div class="drag-box-view">
    <drag-box></drag-box>
  </div>
</template>

<script>
import DragBox from './components/DragBox'
export default {
  name: 'DragBoxView',
  components: { DragBox }
}
</script>

<style lang="scss" scoped>
.drag-box-view {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
