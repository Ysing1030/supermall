<template>
  <nav-bar id="homeNav">
      <div @click="back"  slot="left" class="back"><img src="~assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="center">
          <div
          class="nav-item"
          :class="{active:index === curIndex}"
          v-for="(item,index) in ['商品','参数','评论','推荐']"  
          :key="item" 
          @click="navItemClick(index)"
          >{{ item }}</div>
      </div>
  </nav-bar>
</template>

<script>
/* 公共组件的导入 */
import NavBar from 'components/common/navbar/NavBar'

export default {
    data(){
        return{
            curIndex:0,
            topY:[0,200,300,100]
        } 
    },
    components:{
        NavBar
    },
    methods:{
        navItemClick(index){
            this.curIndex = index
            // 点击滚动到指定区域
            this.$emit('scrollPointArea',index)

        },
        back(){
            this.$router.back();
            this.curIndex = 0;
        },
    }

}
</script>

<style scoped>
     #homeNav .back{
        margin-top: 5px;
    }
    #homeNav .center{
        display: flex;
        font-size: 13px;
    }
    #homeNav .center .nav-item{
        flex: 1;
    }
    #homeNav .center .nav-item.active{
        color: var(--color-high-text);
        font-size: 14px;
    }
</style>