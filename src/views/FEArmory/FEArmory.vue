<template>
  <div class="fe-armory">
    <div class="menu-list">
      <div
        class="item"
        v-for="(item, index) in menuList"
        :key="index"
        @click="jumpTo(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="fe-armory-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import FEArmoryList from '../../data/FEArmoryList.js'
export default {
  name: 'FEArmory',
  data () {
    return {
      menuList: []
    }
  },
  created () {
  },
  mounted () {
    this.menuList = FEArmoryList
  },
  methods: {
    jumpTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.fe-armory {
  width: 100%;
  height: 100%;
  display: flex;
  .menu-list {
    width: 220px;
    margin: 40px 0;
    padding: 5px 0;
    border-right: 1px solid#DDDFE5;
    text-align: center;
    display: flex;
    flex-direction: column;
    .item {
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      font-size: 14px;
      transition: font-size .2s ease-in-out;
      &:hover {
        background-color: #ccc;
        color: orange;
        font-size:18px;
      }
    }
  }
  .fe-armory-main {
    flex: 1;
  }
}
</style>
