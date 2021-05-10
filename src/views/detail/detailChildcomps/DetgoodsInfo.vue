<template>
  <div v-if="Object.keys(goodsInfo).length !== 0"  id="goodsInfo">
      <div class="title">{{ goodsInfo.title }}</div>
      <div class="price">
          <span class="new">{{ goodsInfo.newPrice }}</span>
          <span class="old">{{ goodsInfo.oldPrice }}</span>
          <span v-if="goodsInfo.discount" class="discount">{{ goodsInfo.discount }}</span>
      </div>
      <div class="columns">
          <div>{{ goodsInfo.columns[0] }}</div>
          <div>{{ goodsInfo.columns[1] }}</div>
          <div>{{ goodsInfo.services[goodsInfo.services.length-1].name }}</div>
      </div>
      <div class="service">
          <div v-for="index in goodsInfo.services.length-1" :key="index">
              <img :src="goodsInfo.services[index-1].icon" alt="">
              <span>{{ goodsInfo.services[index-1].name }}</span>
          </div>
      </div>
  </div>
<!--  <div v-if="Object.keys(goodsInfo).length !== 0" class="base-info">
    <div class="info-title">{{goodsInfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goodsInfo.newPrice}}</span>
      <span class="o-price">{{goodsInfo.oldPrice}}</span>
      <span v-if="goodsInfo.discount" class="discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goodsInfo.services.length-1" :key="index">
        <img :src="goodsInfo.services[index-1].icon">
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div> -->
</template>

<script>
export default {
    props:{
        goodsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    created(){
        // console.log(this.goodsInfo);
    }

}
</script>

<style scoped>
    #goodsInfo{
        padding: 10px;
         border-bottom: 5px solid #f2f5f8
    }
    #goodsInfo .title{
        font-size: 10px;
        color: #222;
    }
    #goodsInfo .price{
        margin-top: 10px;
    }
    #goodsInfo .price .new{
        font-size: 24px;
        color: var(--color-high-text);
    }   
    #goodsInfo .price .old{
       font-size: 13px;
       color: #999;
       margin-left: 5px;
       text-decoration: line-through;
    }
    #goodsInfo .price .discount{
       position: relative;
       left: 5px;
       bottom: 10px;
       height: 20px;
       padding: 2px 5px;
       line-height: 20px;
       background-color: var(--color-high-text);
       font-size: 12px;
       border-radius: 8px;
       color: #fff;
    }
    #goodsInfo .columns{
        display: flex;
        color: #999;
        justify-content: space-between;
        margin-top: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(100,100,100,.1);
        font-size: 13px;
    }
    #goodsInfo .service{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        color: #222;
        font-size: 13px;
        padding-bottom: 20px;
       
    }
    #goodsInfo .service img{
        width: 15px;
        height: 15px;
        position: relative;
        top: 3px;
    }
</style>