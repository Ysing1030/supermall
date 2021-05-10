<template>
<div v-if="Object.keys(detComments).length !== 0" id="comments">
 <div v-for="item in detComments" :key="item.rateId">
      <div class="top">
          <div class="user-cms">用户评论</div>
          <div class="more">更多<img src="~assets/img/common/gengduo.svg" alt=""></div>
      </div>
      <div class="middle">
          <div class="user">
              <img :src="item.user.avatar" alt="">
              <span class="username">{{ item.user.uname }}</span>
          </div>
          <div class="content">
             <p>{{ item.content }}</p>
          </div>
          <div class="other">
              <span class="time">{{ item.created | getData }}</span>
              <span class="style">{{ item.style }}</span>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import { formatDate } from 'common/utills'

export default {
    props:{
        detComments:{
            type:Array,
            default(){
                return []
            }
        }
    },
    filters:{
        getData(date){
            let time = new Date(date*1000)
            return formatDate(time, 'yyyy-MM-dd')
        }
    }
}
</script>

<style scoped>
    #comments{
        padding: 10px;
        border-bottom: 5px solid rgba(100, 100, 100, .06);
        padding-bottom: 30px;
    }
    #comments .top{
        display: flex;
        justify-content: space-between;
        color: #222;
        height: 20px;
        line-height: 20px;
        padding-bottom: 35px;
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
        box-sizing: border-box;
    }
    #comments .top .user-cms{
        position: relative;
        top: 4px;
    }
    #comments .top .more{
        font-size: 12px;
    }
    #comments .top  img{
        width: 18px;
        height: 18px;
        position: relative;
        top: 4px;
    }
    #comments .middle{
        margin-top: 10px;
    }
    #comments .middle .user img{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        vertical-align:middle;
        margin-right: 10px;
    }
    #comments .middle .content{
        margin: 10px 0;
        font-size: 14px;
        color: #777;
    }
    #comments .middle .other{
        font-size: 12px;
        color: darkgrey;
    }
    #comments .middle .other .time{ 
        margin-right: 10px;
    }
   
</style>