<template>
  <div class="layout-page">
    <!-- 样式宽度的变化 -->
    <!-- :style="{width: $store.state.settings.isFold ? '50px': '200px'}" -->
    <sidebar-com class="left"  ></sidebar-com>
    <div class="right">
      <header-com :userInfo="userInfo" class="top"></header-com>
      <main-com class="main"></main-com>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import headerCom from './header'
import mainCom from './main'
import sidebarCom from './sidebar'
export default {
  name: 'layout-page',
  props: {},
  components: {
    headerCom,
    mainCom,
    sidebarCom
  },
  data () {
    return {
      userInfo: {},
      isFold: false
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getUserInfo()
  },
  mounted () {},
  methods: {
    async getUserInfo () {
      const { data } = await getUserInfo()
      // 故意把用户头像url该错误
      // data.staffPhoto = 'xxx.png'
      this.userInfo = data
    }

  }
}
</script>

<style lang="scss" scoped>
.layout-page {
  height: 100vh;
  display: flex;
  .left {
    // width: 200px;
    background: pink;
    // 过度的精髓：样式的变化
    // transition: width 0.5s;
  }
  .right {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .top {
    height: 60px;
    background: red;
  }
  .main {
    flex: 1;
    background: blue;
  }
}
</style>
