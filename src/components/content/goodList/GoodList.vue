<template>
    <div class="goodList">
        <good-list-item
            v-for="item in goods"
            :key="item.title"
            :goodItem=item
        ></good-list-item>
    </div>
</template>

<script>
import GoodListItem from "./GoodListItem"
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    components:{
        GoodListItem
    }
}
</script>

<style scoped>
    .goodList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
</style>