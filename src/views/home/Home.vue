<template>
<div id="home">
  <nav-bar class="homeNav"><div slot="center">购物街</div></nav-bar> 
  <nav-control 
     :navList="['流行','新款','精选']"
     @navClick="navClick"
     class="navControl"
     ref="navControl1"
     v-show="isFixed"
     ></nav-control>  
  <scroll 
    class="wrapper"
    :probeType="3"
    :pullUpLoad=true
    @scroll="scroll"
    @pullLoadData="pullLoadData"
    ref="scroll"
    >
     <home-swiper :homeBanner="homeBanner" @swiperImgLoaded='swiperImgLoaded'></home-swiper>
     <home-recommond :homeRecmd="homeRecmd"></home-recommond>
     <home-feature></home-feature>
     <nav-control 
     :navList="['流行','新款','精选']"
     @navClick="navClick"
     class="navControl"
     ref="navControl2"
     ></nav-control>  
     <good-list :goods="showGoods" ></good-list>
  </scroll>
  <!-- 回到顶部 -->
  <back-up 
  v-show="isShowToUp"
  @click.native="backUpClick"
  ></back-up>
 
</div>
</template>

<script>
  //公共组件导入
  import NavBar from "components/common/navbar/NavBar"
  import navControl from "components/content/navControl/NavControl"
  import goodList from "components/content/goodList/GoodList"
  import Scroll from 'components/common/scroll/Scroll' 
  import BackUp from 'components/content/backUp/BackUp'


  //子组件导入 
  import HomeSwiper from "./homeChildCpn/HomeSwiper"
  import HomeRecommond from "./homeChildCpn/HomeRecommond"
  import HomeFeature from "./homeChildCpn/HomeFeature"
  
  // home请求接口
  import { getHomeMultiData,getHomeGoodsdata } from "network/home.js"
  // 第三方函数库
  import { debounce } from "common/utills"
  export default {
    name: "Home",
    data(){
      return{
       homeBanner:[],
       homeRecmd:[],
       goods:{
         'pop':{list:[],page:0},
         'new':{list:[],page:0},
         'sell':{list:[],page:0}
       },
       curType:'pop',
       isShowToUp:false,
       isFixed:false,
       navControlOffsetTop:0,
       leaveTopdis:0
      }
    },
    components: {
      NavBar,
      navControl,
      goodList,
      Scroll,
      
      BackUp,
      HomeSwiper,
      HomeRecommond,
      HomeFeature,
    },
    computed:{
      showGoods(){
        return this.goods[this.curType].list;
      },
    },
    created(){
      // 获取homeMultiData数据
      this.getHomeMultiData()
      // 获取homegoods信息
      this.getGooodList('pop');
      this.getGooodList('new');
      this.getGooodList('sell');
    },
    mounted(){
      // 实现防抖
      let refresh = debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('imgLoaded',() => {
        refresh()
      })

     /*  this.$bus.$on('imgLoaded',() => {
        this.$refs.scroll.refresh();
      }) */
    },
    activated(){
      this.$refs.scroll.backUp(0,this.leaveTopdis,0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.leaveTopdis = this.$refs.scroll.getScrollY()
    },
    methods:{
      /**
       * 获取数据
       */
      getHomeMultiData(){
        getHomeMultiData().then(res => {
          this.homeBanner = res.data.banner.list
          this.homeRecmd = res.data.recommend.list
        })
      },
      getGooodList(type){
        const page = this.goods[type].page + 1;
        getHomeGoodsdata(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page ++;

          // this.$refs.scroll.finishPullUp();
          this.$refs.scroll.finishPullUp()
          // console.log(this.$refs.scroll);
        })
       
      },
      /**
       * 事件触发
       */
      navClick(index){
        switch(index){
          case 0:
            this.curType = 'pop';
            break;
          case 1:
            this.curType = 'new';
            break;
          case 2:
            this.curType = 'sell';
            break;
        }
        this.$refs.navControl1.curIndex = index;
        this.$refs.navControl2.curIndex = index;
      },
      scroll(positionY){
        this.isShowToUp = (-positionY) > 1000
        this.isFixed = (-positionY) > this.navControlOffsetTop;
      },
      backUpClick(){
        this.$refs.scroll.backUp(0,0)
      },
      pullLoadData(){
        this.getGooodList(this.curType)
      },
      // 第一次轮播图高度出来，获取navControl的offsetTop
      swiperImgLoaded(){
        this.navControlOffsetTop = this.$refs.navControl2.$el.offsetTop;
      }
    }
  }
</script>

<style scoped>
    #home{
      height: 100vh;
      position: relative;
    }
    .homeNav{
      background-color: var(--color-tint);
      position: sticky;
      color: white;
      top: 0px;
      z-index: 9;
    }
    .wrapper{
      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;
      overflow: hidden;
    }
    .navControl{
      position: sticky;
      top: 44px;
      z-index: 9;
     
    }
</style>
