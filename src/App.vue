<template>
  <div>
    <p>user中的states:{{$store.state.user.age}}</p>
    <p>shopCar中的states:{{$store.state.shopCar.age}}</p>
    <p>shopCar中的getters:{{$store.getters['user/myAge']}}</p>
    <button @click="changuserAge">改变user模块中的state</button>
    <button @click="changshopCarAge">改变shopCar模块的state</button>
    <router-view />
  </div>
</template>
<script>
export default {
  created () {
    console.log(this)
  },
  methods: {
    changuserAge () {
      // this.$store.commit('user/changeAge', 30)
      this.$store.dispatch('user/getAge')
    },
    changshopCarAge () {
      this.$store.commit('shopCar/changeAge', 40)
    }
  }
}
</script>
