<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    mounted () {
      this.getAddress()
      this.getUserInfo()
    },
    methods: {
      ...mapActions(['getAddress','getUserInfo'])
    },

    components: {
      FooterGuide
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  whdth 100%
  height 100%
  background #F5F5F5
}
</style>
