<template>
  <button
    class="tl-button"
    @click="handleClick"
    :style="{width, height}"
    :type="buttonType"
    :class="[
      type ? `tl-button-${type}` : '',
    ]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TlButton',
  props: {
    height: { type: String, default: '30px' },
    width: { type: String, default: '80px' },
    type: { type: String, default: 'default' },
    buttonType: { type: String, default: 'button' }
  },
  data () {
    return {
      // style: {
      //   width: `${width}px`
      // }
    }
  },
  mounted () {
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tl-button {
    cursor: pointer;
    &:active {
      background-color: yellow;
    }
  }
</style>
