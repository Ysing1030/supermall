<template>
   <tabbar>
     <tabbar-item activeColor="pink" path="/home">   
        <img slot="img" src="~assets/img/tabbar/home.svg">
        <img slot="a_img" src="~assets/img/tabbar/home_active.svg">
        <div slot="text">首页</div>   
     </tabbar-item>
     <tabbar-item activeColor="pink" path="/category">
       <img slot="img" src="~assets/img/tabbar/category.svg">
       <img slot="a_img" src="~assets/img/tabbar/home_active.svg">
       <div slot="text">分类</div>   
     </tabbar-item>
     <tabbar-item activeColor="pink" path="/cart">
       <img slot="img" src="~assets/img/tabbar/shopcart.svg">
       <img slot="a_img" src="~assets/img/tabbar/shopcart_active.svg">
       <div slot="text" >购物车</div>   
     </tabbar-item>
     <tabbar-item activeColor="pink" path="/profile">
       <img slot="img" src="~assets/img/tabbar/profile.svg">
       <img slot="a_img" src="~assets/img/tabbar/profile_active.svg">
       <div slot="text">我的</div>   
     </tabbar-item>
   </tabbar>
</template>
 
<script>

import tabbar from "components/common/Tabbar/Tabbar"
import tabbarItem from "components/common/Tabbar/TabbarItem"

export default {
    name:"MainTabbar",
    components:{
      tabbarItem,
      tabbar
    }
}
</script>

<style scoped>

</style>