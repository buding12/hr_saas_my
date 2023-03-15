<template>
  <div>
    <!-- <button @click="changeToken">改变token</button>
    <button @click="delToken">删除token</button> -->
    <!-- 一级路由 -->
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    changeToken () {
      this.$store.commit('user/SET_TOKEN', '1234456')
    },
    delToken () {
      this.$store.commit('user/DEL_TOKEN')
    }
  }
}
</script>
