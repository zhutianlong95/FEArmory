<template>
  <div class="magic-card">
    <div class="container">
      <div class="cover"></div>
      <div class="back rd"></div>
    </div>
    <div class="container">
      <div class="cover"></div>
      <div class="back bd"></div>
    </div>
    <div class="container">
      <div class="cover"></div>
      <div class="back d12"></div>
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
  position: relative;
}
.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(0);
  transition: transform .3s ease-in-out;
  background-image: url('../../../../assets/img/hearthstone1.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.back {
  position: absolute;
  width: 320px;
  height: 450px;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  transition: transform .3s ease-in-out;
  border-radius: 12px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  top: -42px;
  left: 0;
  position: relative;
}
.d12 {
  background-image: url('../../../../assets/img/hearthstone2.png');
}
.rd {
  background-image: url('../../../../assets/img/hearthstone3.png');
}
.bd {
  background-image: url('../../../../assets/img/hearthstone4.png');
}
.container:hover .cover {
  transform: rotateY(180deg)
}
.container:hover .back {
  transform: rotateY(0);
}
</style>
