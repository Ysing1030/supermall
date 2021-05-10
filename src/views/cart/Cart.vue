<template>
  <div id="shopCar"> 
      <nav-bar class="navbar">
        <div slot="center">购物车({{count}})</div>
      </nav-bar>
      <scroll
       :probeType='3'
       class="content" 
       ref="scroll">
         <goodsList></goodsList>
      </scroll>
      <bottom-bar></bottom-bar>
  </div>
</template>

<script>
/* 公共组件 */ 
 import NavBar from 'components/common/navbar/NavBar'
 import Scroll from 'components/common/scroll/Scroll'

 /* 子组件 */
 import GoodsList from './carChildComps/CarGoods'
 import bottomBar from './carChildComps/CarBottomBar'

 /* 第三方库 */
// import { debounce } from "common/utills"

export default {
  computed:{
    count(){
      return this.$store.getters.carListLength
    }
  },
	components:{
    NavBar,
    GoodsList,
    bottomBar,
    Scroll
  },
  activated(){
      this.$refs.scroll.refresh(); 
  }
}
</script>

<style scoped>
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;  
    width: 100%;
    z-index: 100;
  }
  .content{
    height: calc(100vh - 40px - 44px - 46px);
    position:relative;
    top: 42px;
    overflow: hidden;
  }
  #shopCar{
    height: 100vh
  }
</style>
