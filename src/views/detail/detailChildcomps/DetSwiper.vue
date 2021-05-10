<template>
   <swiper id="swiper">
    <swiper-item 
    v-for="item in topImages" 
    :key="item"
    >
        <img :src="item">
    </swiper-item>
   </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
     data(){
      return{
        swiperImgLoad:false
      }
    },
    props:{
      topImages:{
        type:Array,
        default(){
            return [];
        }
      }
    },
    components:{
     Swiper,
     SwiperItem
    },
    methods:{
    /*   swiperImgLoaded(){
        if(!this.swiperImgLoad){
          this.$emit('swiperImgLoaded')
        }
        this.swiperImgLoad = true;
      } */
    },
}
</script>

<style scoped>
    #swiper{
        position: relative;
        height: 300px;
        overflow: hidden;
    }
</style>