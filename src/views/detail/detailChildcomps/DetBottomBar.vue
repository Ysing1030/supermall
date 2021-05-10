<template>
  <div id="bottom-bar">
    <div class="left">
      <div class="item">
        <img class="service" src="~assets/img/bottombar/kefu.svg" alt="">
        <span>客服</span>
      </div>
       <div class="item">
         <img src="~assets/img/bottombar/dianpu.svg" alt="">
         <span>店铺</span>
      </div>
       <div class="item">
         <img src="~assets/img/bottombar/shoucang1.svg" alt="">
         <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="add-car" @click="addCarClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>

export default {
  methods:{
    addCarClick(){
      //
      this.$emit('addGoodsToCar')
    }
  }
}
</script>

<style scoped>
    #bottom-bar{
        position: fixed;
        height: 58px;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 200;
        display: flex;
    }
    #bottom-bar > div{
      flex: 1;
    }
    #bottom-bar .left{
      text-align: center;
      display: flex;
    }
    #bottom-bar .left .item{
      flex: 1;
      font-size: 13px;
    }
    #bottom-bar .left img{
      width: 25px;
      height: 25px;
      display: block;
      margin: 10px auto 3px;
    }
    #bottom-bar .right{
      display: flex;
      line-height: 58px;
    }
    #bottom-bar .right > div{
      text-align: center;
      flex: 1;
      color: #333;
    }
    #bottom-bar .right .add-car{
      background-color: #ffe817;;
    }
    #bottom-bar .right .buy{
     background-color:  #f69;
    }
</style>