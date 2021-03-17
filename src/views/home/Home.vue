<template>
<div>
  <nav-bar class="homeNav"><div slot="center">购物街</div></nav-bar>
  <home-swiper :homeBanner="homeBanner"></home-swiper>
  <home-recommond :homeRecmd="homeRecmd"></home-recommond>
</div>
</template>

<script>
  //组件导入
  import NavBar from "components/common/navbar/NavBar"
  import HomeSwiper from "./homeChildCpn/HomeSwiper"
  import HomeRecommond from "./homeChildCpn/HomeRecommond"
  // home请求接口
  import {getHomeMultiData} from "network/home.js"
  export default {
    name: "Home",
    data(){
      return{
       homeBanner:[],
       homeRecmd:[]
      }
    },
    components: {
     NavBar,
     HomeSwiper,
     HomeRecommond
    },
    created(){
      getHomeMultiData().then(res => {
      this.homeBanner = res.data.banner.list
      this.homeRecmd = res.data.recommend.list
  })
}
  }
</script>

<style scoped>
  .homeNav{
    background-color: var(--color-tint);
  }
</style>
