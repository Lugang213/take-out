<template>
    <div class="msite">
      <HeaderTop title="莱锦创意产业园">
        <router-link slot="search" to="/search" class="header_search">
          <i class="iconfont iconsoushuo"></i>
        </router-link>
        <router-link slot="login" to="/login"/ class="header_login">
          <span class="header_login_text">注册|登录</span>
        </router-link>
      </HeaderTop>
      <nav class="msite_nav border-1px">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:;" class="link_to_food">
                <div class="food_container"><img src="./images/nav/1.jpg" alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!--首页 附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont iconshangjia"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <ShopList />
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'
  export default {
    mounted (){
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true
      })
    },
    components: {
      HeaderTop,
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    widht 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            aligh-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 10px 0
        .iconfont
          display inline-block
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
