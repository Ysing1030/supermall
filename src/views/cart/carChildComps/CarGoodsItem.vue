<template>
  <div id="shop-car">
      <div class="left">
          <img class="tick" @click="tickClick" :class="{ active:goodsItem.checked }" src="~assets/img/cart/tick.svg" alt="">
      </div>    
      <div class="center">
          <img class="image" :src="goodsItem.imgURL" alt="" @load="imgloaded">
      </div>
      <div class="right">
          <div class="title">{{ goodsItem.title}}</div>
          <div class="desc">商品描述:{{ goodsItem.desc}}</div>
          <div class="pric-cout">
              <div class="price">$:{{ goodsItem.newPrice}}</div>
              <div class="count">×{{ goodsItem.count}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isActive:false
        } 
    },
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        tickClick(){
            this.goodsItem.checked = !this.goodsItem.checked;
        },
        imgloaded(){
             this.$bus.$emit('carImgLoaded');
        }
    }
}
</script>

<style scoped>
    #shop-car{
        display: flex;
        padding: 10px;
        height:121px;
        width: 100%;
        border-bottom: 1px solid rgba(100, 100, 100, .2);
    }
    .left {
        width: 5%;
    }
    .left .tick{
        color: red;
        width: 18   px;
        height: 18px;
        border: 2px solid #ccc;
        border-radius: 50px;
        position: relative;
        right: 6px;
        top: 40px;
    }
    .left .tick.active{
        background-color: var(--color-high-text);
        border: none;
    }
    .left .tick img{
        
    }
    .center{
        width: 23%;
        margin-right: 10px;
    }
    .right{
       width: 72%;
    }
    .center .image{
        width: 80px;
        height: 100px;
        border-radius: 5px;
    }
    .right .title,.desc{
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .right .title{
        color: #222;
    }
    .right .desc{
        margin-top: 15px;
        color: #666;
        font-size: 14px;
    }
    .right .pric-cout{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
    .right .price{
        color: orangered;
    }
    .right .count{
        margin-right: 20px;
    }
</style>