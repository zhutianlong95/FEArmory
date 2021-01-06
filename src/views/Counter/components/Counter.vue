<template>
  <div class="box">
    <div class="counter">
      <button
        @click="subtract"
        :disabled="isAnimating"
      >
        -
      </button>
      <span
        :class="{before: isBefore, after: isAfter}"
        :data-before="countBefore"
        :data-after="countAfter"
      >
        {{ count }}
      </span>
      <button
        @click="add"
        :disabled="isAnimating"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      count: 10,
      isBefore: false,
      isAfter: false
    }
  },
  computed: {
    isAnimating () {
      return this.isBefore || this.isAfter
    },
    countBefore () {
      return this.count - 1
    },
    countAfter () {
      return this.count + 1
    }
  },
  methods: {
    subtract () {
      this.isBefore = true
      setTimeout(() => {
        this.count--
        this.isBefore = false
      }, 200)
    },
    add () {
      this.isAfter = true
      setTimeout(() => {
        this.count++
        this.isAfter = false
      }, 200)
    }
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.counter {
  width: 500px;
  height: 100px;
  display: flex;
  background-color: #000;
  border-radius: 20px;
  overflow: hidden;
  padding: 30px 0;
  position: relative;
  box-shadow: 0 3px 12px rgba(0, 0, 0, .2);
}
.counter::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, .9) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, .9) 100%);
}
.counter span {
  display: block;
  line-height: 100px;
  color: #fff;
  /* color: orange; */
  flex: 1 1 500px;
  text-align: center;
  transform: translateY(-100px);
  /* transition: transform 2s ease-in; */
}
span.before {
  transform: translateY(0);
  transition: transform .2s ease-in;
}
span.after {
  transform: translateY(-200px);
  transition: transform .2s ease-in;
}
.counter span::before {
  display: block;
  content: attr(data-before);
}
.counter span::after {
  display: block;
  content: attr(data-after);
}
.counter button{
  flex: 0 0 120px;
  border: 0;
  background: none;
  color: #fff;
  font-size: 120px;
  padding: 0;
  margin: 0;
  height: 100px;
  line-height: 100px;
  position: relative;
  z-index: 999;
  outline: none;
}
</style>
