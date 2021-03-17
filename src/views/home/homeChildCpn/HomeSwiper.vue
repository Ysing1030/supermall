<template>
  <div>
   <swiper>
    <swiper-item v-for="item in homeBanner" :key="item.link">
      <a :href="item.title">
        <img :src="item.image">
      </a>
    </swiper-item>
   </swiper>
  </div>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
     data(){
      return{

      }
    },
    props:{
      homeBanner:{
        type:Array
      }
    },
    components:{
     Swiper,
     SwiperItem
    },
}
</script>

<style scoped>

</style>