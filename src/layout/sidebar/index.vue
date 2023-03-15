<template>
  <div>
    <!-- 去掉动画 -->
    <!-- :collapse-transition="false" -->
    <el-menu
      :collapse-transition="false"
      :collapse="$store.state.settings.isFold"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item v-for="item in routes" :key="item.path" index="4">
        <svg class="icon">
          <use :xlink:href="`#icon-${item.meta.icon}`" />
        </svg>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'sidebar-page',
  props: {},
  components: {},
  data () {
    return {

    }
  },
  computed: {
    routes () {
      return this.$router.options.routes.filter(item => item.meta && item.meta.isShow === true)
    }
  },
  watch: {},
  created () {
    // console.log(this)

  },
  mounted () {},
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
</style>
