<template>
  <div>layout</div>
</template>

<script>
import { getUserInfo } from '@/api/user'
export default {
  name: 'layout-page',
  props: {},
  components: {},
  data () {
    return {

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
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
