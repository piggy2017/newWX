<template>
  <div class="firstPage">
    <div class="big-pic">
      <img src="../assets/wxsy_02.png" alt="">
      <div class="top-navbar">
        <div class="top-navbar-item">
          <router-link tag="div" to="/earn">
            <img src="../assets/kajuan.jpg" alt="">
            <div>
              来赚钱
            </div>
          </router-link>
        </div>
        <div class="top-navbar-item">
          <router-link tag="div" to="/travel">
            <img src="../assets/car.jpg" alt="">
            <div>
              去旅游
            </div>
          </router-link>
        </div>
        <div class="top-navbar-item">
          <router-link tag="div" to="/house">
            <img src="../assets/xiaoqu.jpg" alt="">
            <div>
              来看房
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="banner-list">
      <div class="banner-list-title">景区精选楼盘1</div>
      <!--<div class="banner-list-content">-->
        <!--<slider v-bind:bannerList="swiperList"></slider>-->
          <!--<div class="swiper-container">-->
              <!--<div class="swiper-wrapper">-->
                  <!--<div class="swiper-slide" v-for="item in swiperList">-->
                      <!--<router-link :to="'/projectDetail/'+item.id">-->
                          <!--<img :src="item.cover" alt="">-->
                          <!--<p class="item-name">{{item.name}}</p>-->
                          <!--<p class="item-area">{{item.areaName}}</p>-->
                      <!--</router-link>-->
                  <!--</div>-->
              <!--</div>-->
              <!--<div class="swiper-button-prev"></div>-->
              <!--<div class="swiper-button-next"></div>-->
          <!--</div>-->
      <!--</div>-->
    </div>
      <div class="box">
          <mt-swipe :auto="3000" class="swiper-box">
              <mt-swipe-item class="swiper-box-item" v-for="item in swiperList" :key="item.id">
                  <router-link :to="'/projectDetail/'+item.id" class="swiper-box-item-a">
                      <img :src="item.cover" alt="">
                  </router-link>
              </mt-swipe-item>
          </mt-swipe>
      </div>
    <div class="go-rights">
      <img src="../assets/wxsy1.png" alt="">
      <p class="go-rights-text">景区处处都有家</p>
    </div>
    <div class="hotel-list">
      <hotel-list v-bind:hotelList="hotelList"></hotel-list>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import data from '@/assets/js/util.js'
  import hotelList from '@/components/hotelList/hotel-list'
  import { Swipe, SwipeItem } from 'mint-ui';
  import Vue from 'vue'
  Vue.component('mt-swipe', Swipe);
  Vue.component('mt-swipe-item', SwipeItem);
  export default {
    components:{
      hotelList:hotelList
    },
    data(){
      return{
        swiperList:[],
        hotelList:[]
      }
    },
    methods:{
      init(){
        axios.get(data.baseUrl+'projects').then(res=>{
          console.log(res)
          this.swiperList=res.data.api_data.slice(0,3);
//          this.$nextTick(function(){
//              var mySwiper  = new Swiper('.swiper-container', {
//                  autoplay: false,
//                  slidesPerView :2,
//                  navigation: {
//                      nextEl: '.swiper-button-next',
//                      prevEl: '.swiper-button-prev',
//                  },
//                  observer:true, //修改swiper自己或子元素时，自动初始化swiper
//                  observeParents:true,//修改swiper的父元素时，自动初始化swiper
//                  spaceBetween : '5%'
//              });
//          })
        })
      },
      getHotelList(){
        axios.get(data.baseUrl+'hresources').then(res=>{
          console.log(res)
          this.hotelList=res.data.api_data
        })
      }
    },
    created(){
      this.init();
      this.getHotelList();
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/variable.styl"
  a
    color $color-333
  .firstPage
    position relative
    padding-bottom  $padding-bottom-25
    .big-pic
      width $width-100
      height 10rem
      position relative
      img
        width $width-100
        height $height-100
      .top-navbar
        position absolute
        width 80%
        height 3.5rem
        top 8.25rem
        background-color $bg-color-fff
        left 10%
        z-index 9
        display flex
        flex-flow row nowrap
        border-radius 0.2rem
        box-shadow 0 5px 7px $bg-color-1
        .top-navbar-item
          position relative
          display flex
          text-align center
          justify-content center
          flex-flow column
          flex auto
          padding 0.5rem 0
          font-size  $font-size-62
          color  $color-333
          img
            width 1.75rem
            height 1.75rem
    .banner-list
      width $width-148
      margin 2.4rem auto 0 auto
      position relative
      .banner-list-title
        color $color-333
        font-size 0.7rem
        padding 0.2rem 0
      .banner-list-content
        height 12.5rem
        position relative
        margin-top 0.3rem
    .go-rights
      width $width-148
      margin 0.7rem auto 0.3rem auto
      img
        width $width-100
        height 8rem
      .go-rights-text
        font-size 0.7rem
        margin 0.5rem 0
    .hotel-list
      width $width-148
      margin 0 auto 0 auto
      padding-bottom 1.2rem
  .swiper-container,.swiper-wrapper{
      height: 100%;
      width: 100%;
      position: relative;
  }
  .swiper-slide{
      /*width: 7.1rem;*/
      height: 100%;
  }
  .swiper-slide:not(:last-child){
      /*margin-right:0.6rem ;*/
  }
  .swiper-slide img{
      width: 100%;
      height: 10rem;
  }
  .item-name{
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      font-size: 0.65rem;
      line-height: 1.2rem;
  }
  .item-area{
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      font-size: 0.55rem;
      line-height: 1rem;
  }
    .box{
        width 100%
        height 8rem
    }
    .swiper-box{
        width 100%
        height 100%
    }
    .swiper-box-item{
        width 100%
        height 100%
    }
    .swiper-box-item-a img{
        height 8rem;
        width 100%
    }
</style>
