<template>
   <div class="tabbar-item" @click="itemchange">
       <div v-if="!isActive"><slot name="img"></slot></div>
       <div v-else><slot name="a_img"></slot></div>
       <div :style="tabbarTextColor"><slot name="text"></slot></div>   
   </div>
</template>

<script>
export default {
    name:"tabbarItem",
    data(){ 
      return{
        
      }
    },
    props:{
      path:{
        type:String,
      },
      activeColor:{
        type:String,
        default:"red"
      }
    },
    computed:{
       tabbarTextColor(){
         if(this.$route.path === this.path){
           return {color:this.activeColor}
         }      
       },
       isActive(){
         return this.$route.path === this.path;
       }
    },
    methods:{
        itemchange(){   
          if(this.$route.path === this.path){
            return;
          }
          this.$router.replace(this.path)
        }
    }
}
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
}
 
  .tabbar-item{
    flex: 1;
    text-align: center;
    margin-top: 3px;
  }
  .tabbar-item img{
    vertical-align:middle;
    width: 24px;
    height: 24px;
  }
</style>