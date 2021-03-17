<template>
  <div class="homeRecm">
    <div class="item" v-for="item in homeRecmd" :key="item.title">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{ item.title }}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        homeRecmd:{
            type:Array
        }
    }
}
</script>

<style>
    .homeRecm{  
        width: 100%;
        display: flex;
        text-align: center;
        padding: 10px 10px 25px;
        border-bottom: 10px solid #eee;
        font-size: 10px;
    }
    .homeRecm .item{
        flex:1;
    }
    .homeRecm .item img{
        width: 70px;
        height:70px;
        margin-bottom: 5px;
    }
</style>