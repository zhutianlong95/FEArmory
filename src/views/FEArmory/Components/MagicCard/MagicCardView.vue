<template>
  <div class="magic-card">
    <div class="container">
      <div class="cover">cover1</div>
      <div class="back">红桃A</div>
    </div>
    <div class="container">
      <div class="cover">cover2</div>
      <div class="back">红桃A</div>
    </div>
    <div class="container">
      <div class="cover">cover3</div>
      <div class="back">红桃A</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MagicCardView',
  data () {
    return {}
  }
}
</script>

<style scoped>
.magic-card {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
}
.container {
  position: relative;
  width: 300px;
  height: 400px;
  perspective: 1000px;
  cursor: pointer;
}
.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color:blue;
  backface-visibility: hidden;
  transform: rotateY(0);
  transition: transform .3s ease-in-out;
}
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color:yellow;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  transition: transform .3s ease-in-out;
}
.container:hover .cover {
  transform: rotateY(180deg)
}
.container:hover .back {
  transform: rotateY(0);
}
</style>
