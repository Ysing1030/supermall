<template>
  <div class="nav-control">
      <div class="nav-control-item"
           v-for="(item,index) in navList" 
           :key="item"
           :class="{active:index === curIndex}"
           >
          <span @click="navItemClick(index)">{{ item }}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        navList:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data(){   
        return{
            curIndex:0
        }   
    },
    methods:{
        navItemClick(index){
            this.curIndex = index;
            this.$emit('navClick',index)
        }
    }
}
</script>

<style>
    .nav-control{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        background-color: #fff;

       /*  position: sticky;
        top: 44px;
        z-index: 9; */
    }
    .nav-control .active{
        color: var(--color-tint);
    }
    .nav-control .nav-control-item{
        flex: 1;
    }
    .nav-control .nav-control-item span{
        padding: 5px;
    }
    .nav-control .active span{
        border-bottom: 3px solid var(--color-tint);
    }
   
</style>