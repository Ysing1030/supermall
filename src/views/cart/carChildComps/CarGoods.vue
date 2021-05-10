<template>
  <div id="carList">
      <goods-item v-for="item in goodsList" :key="item.id" :goodsItem="item"></goods-item>
  </div>
</template>

<script>
import goodsItem from './CarGoodsItem'
export default {
    data(){
        return{
            goodsList:this.$store.state.carList
        }
    },
    components:{
        goodsItem
    }
}
</script>

<style scoped>

</style>