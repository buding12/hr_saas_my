<template>
  <div>login</div>
</template>

<script>
export default {
  name: 'login-page',
  props: {},
  components: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  created () {
    // this.login()
  },
  mounted () {},
  methods: {
    async login () {
      try {
        await this.$store.dispatch('user/login')
        this.$router.push('/layout')
      } catch (error) {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
