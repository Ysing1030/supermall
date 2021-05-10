<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
    name:'Scroll',
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:null,
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            click:true,
            pullUpLoad:this.pullUpLoad
        })
        this.scroll.on('scroll', (position) => {
            this.$emit('scroll', position.y)
        })
        this.scroll.on('pullingUp', () => {
            this.pullLoadData()
        })
        
    },
    methods:{
        // 回到指定位置
        backUp(x,y,time = 500){
            this.scroll && this.scroll.scrollTo(x,y,time);
        },
        // 下拉请求数据
        pullLoadData(){
            this.$emit('pullLoadData')
        },
        // 一次下拉加载完成
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp();
        },
        // 完成图片加载
        refresh(){
            this.scroll && this.scroll.refresh();
        },
        // 获取到顶部的距离
        getScrollY(){
            return this.scroll ? this.scroll.y : 0
        }
    }
}
</script>

<style scoped>
    
</style>

