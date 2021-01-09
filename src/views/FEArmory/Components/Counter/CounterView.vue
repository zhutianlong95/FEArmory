<template>
  <div class="counter-view">
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/Counter'

export default {
  name: 'CounterView',
  components: { Counter }
}
</script>

<style scoped>
.counter-view {
  height: 100%;
  width: 100%;
  font-size: 100px;
}
</style>
