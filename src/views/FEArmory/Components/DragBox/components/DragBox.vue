<template>
  <div class="drag-box">
    <pka-card v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index">
    </pka-card>
  </div>
</template>

<script>
import PkaCard from './PkaCard'
export default {
  name: 'DragBox',
  components: { PkaCard }
}
</script>

<style lang="scss" scoped>
.drag-box {
  border: 1px solid black;
  padding: 5px;
  width: 800px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  min-width: 720px;
  overflow: auto;
}
</style>
