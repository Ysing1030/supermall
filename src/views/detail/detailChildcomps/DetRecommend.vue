<template>
  <div id="det-recomd">
      <div class="hot">热门推荐</div>
       <good-list :goods="detRecommend" ></good-list>
  </div>
</template>

<script>
import goodList from "components/content/goodList/GoodList"
export default {
    props:{
        detRecommend:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        goodList
    }
}
</script>

<style scoped>
    #det-recomd{
        padding: 20px 10px;
    }
    #det-recomd .hot{
        margin-bottom: 10px;
        margin-left: 5px;
    }
</style>