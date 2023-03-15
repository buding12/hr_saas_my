<template>
  <div class="header-container">
    <div class="left-con">
      <!-- 图片的实现方式：三种 -->
      <!-- 普通图片，叫位图，原理：像素点。比如：png、jpg、webp、DPG(京东自己) -->
      <!-- 精灵图 -->
      <!-- 字体图标，本质：字体    小图片  -->
      <!-- svg图片，叫矢量图，原理：代码 -->

      <!-- svg 图片的第一种使用方式: img的src -->
      <!-- <img class="hamburger-img" src="@/icons/svg/hamburger.svg" alt /> -->

      <!-- svg 图片的第二种使用方式: 原生 -->
      <!-- <svg class="hamburger-img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
        />
      </svg>-->

      <!-- svg 图片的第三种（只是针对vue）使用方式: import -->
      <!-- <img class="hamburger-img" :src="hamburger" alt /> -->

      <!-- svg 图片的第四种使用方式: 精灵图 -->
      <!-- 第一步：生成一个svg的精灵图片 -->
      <!-- <svg style="display:none;">
        <symbol id="not-found" width="128" height="128" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M121.718 73.272v9.953c3.957-7.584 6.199-16.05 6.199-24.995C127.917 26.079 99.273 0 63.958 0 28.644 0 0 26.079 0 58.23c0 .403.028.806.028 1.21l22.97-25.953h13.34l-19.76 27.187h6.42V53.77l13.728-19.477v49.361H22.998V73.272H2.158c5.951 20.284 23.608 36.208 45.998 41.399-1.44 3.3-5.618 11.263-12.565 12.674-8.607 1.764 23.358.428 46.163-13.178 17.519-4.611 31.938-15.849 39.77-30.513h-13.506V73.272H85.02V59.464l22.998-25.977h13.008l-19.429 27.187h6.421v-7.433l13.727-19.402v39.433h-.027zm-78.24 2.822a10.516 10.516 0 0 1-.996-4.535V44.548c0-1.613.332-3.124.996-4.535a11.66 11.66 0 0 1 2.713-3.68c1.134-1.032 2.49-1.864 4.04-2.468 1.55-.605 3.21-.908 4.982-.908h11.292c1.77 0 3.431.303 4.981.908 1.522.604 2.85 1.41 3.986 2.418l-12.26 16.303v-2.898a1.96 1.96 0 0 0-.665-1.512c-.443-.403-.996-.604-1.66-.604-.665 0-1.218.201-1.661.604a1.96 1.96 0 0 0-.664 1.512v9.071L44.364 77.606a10.556 10.556 0 0 1-.886-1.512zm35.73-4.535c0 1.613-.332 3.124-.997 4.535a11.66 11.66 0 0 1-2.712 3.68c-1.134 1.032-2.49 1.864-4.04 2.469-1.55.604-3.21.907-4.982.907H55.185c-1.77 0-3.431-.303-4.981-.907-1.55-.605-2.906-1.437-4.041-2.47a12.49 12.49 0 0 1-1.384-1.512l13.727-18.217v6.375c0 .605.222 1.109.665 1.512.442.403.996.604 1.66.604.664 0 1.218-.201 1.66-.604a1.96 1.96 0 0 0 .665-1.512V53.87L75.97 36.838c.913.932 1.66 1.99 2.214 3.175.664 1.41.996 2.922.996 4.535v27.011h.028z"
          />
        </symbol>

        <symbol id="hamburger" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
          />
        </symbol>
      </svg>-->
      <!-- 第二步：根据id调用精灵图中的svg -->
      <!-- <svg class="hamburger-img">
        <use xlink:href="#hamburger" />
      </svg>-->

      <!-- 使用webpack打包后的svg图片 -->
      <svg
        class="hamburger-img"
        :style="{transform: !$store.state.settings.isFold ? 'rotate(180deg)' : 'rotate(0deg)'}"
        @click="clickHamburger"
      >
        <use xlink:href="#icon-hamburger" />
      </svg>
    </div>
    <div class="right-con">
      <div class="user-box">
        <img v-imgError="defaultPhoto" :src="userInfo.staffPhoto" alt />
        <p>{{userInfo.username}}</p>
      </div>
      <div class="handle-box"></div>
    </div>
  </div>
</template>

<script>
// import hamburger from '@/icons/svg/hamburger.svg'
import defaultPhoto from '@/assets/head.jpg'
// import store from '@/store'
export default {
  name: 'header-com',
  props: {
    userInfo: {
      type: Object,
      required: true
    }
  },
  components: {},
  data () {
    return {
      // 原理： hamburger(vue中data里的一个属性): hamburger（上面import的变量）
      // hamburger
      defaultPhoto
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    clickHamburger () {
      // 当用户点击汉堡图标时，宽度改变
      // this.$emit('fold', true)
      // 改变折叠状态
      this.$store.commit('settings/TOGGLE_FOLD')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hamburger-img {
  width: 30px;
  height: 30px;
}

// 右侧样式
.right-con {
  display: flex;
  .user-box {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      border-radius: 50%;
    }
  }
}
</style>
