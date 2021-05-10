<template>
  <div class="btm-bar">
        <span class="tick" @click="allSelect">
            <img class="icon" :class="{ active:isSelectAll }" src="~assets/img/cart/tick.svg" alt="">
            <span class="allSelect">全选</span>
        </span>
        <span class="sum">合计 :$ {{ totalPrice }}</span>
        <!-- <span>${{ 0 }}</span> -->
    <span class="calc">去结算({{ totalGoods }})</span>
  </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    computed:{
        totalPrice(){
            const list = this.$store.getters.carList;
            if(list.length){
               return list.filter(item => item.checked).reduce((prev, cur) => {
                  return prev + cur.newPrice*cur.count
                },0).toFixed(2)
            }else{
                return 0;
            }
        },
        totalGoods(){
            const list = this.$store.getters.carList
            return list.filter(item => item.checked).reduce((prev, cur) => {
                  return prev + cur.count
            },0)
        },
        isSelectAll() {
                const list = this.$store.getters.carList
                if(list.length){
                    this.isselect = !list.find(item => item.checked === false)
                    return this.isselect;
                }else{
                    return false;
                }
        }
    },
    methods:{
        allSelect(){
            const list = this.$store.getters.carList;
            if(list.length){
                if(this.isSelectAll){
                    list.map((item,index,arr) => {
                        arr[index].checked = false;
                    })
                }else{
                    list.map((item,index,arr) => {
                        arr[index].checked = true;
                    })
                }   
            }else{
                return;
            }
        }
    }
}
</script>

<style scoped>
    .btm-bar{
        width: 100%;
        position: fixed;
        bottom: 48px;
        height: 40px;
        line-height: 40px;
        background-color: #eee;
        box-shadow: 0 -2px 3px rgb(0 0 0 / 20%);
    }
    .tick{
        margin-left: 10px;
    }
    .icon{
        width: 16px;
        height: 16px;
        border: 2px solid rgba(100, 100, 100, 0.5);
        border-radius: 50px;
        position: relative;
        top: 4px;
        right: 2px;
    }
    .icon.active{
        background-color: var(--color-tint);
    }
    .allSelect{
      
        height: 40px;
        line-height: 40px;
        font-size: 10px;
        color: #333;
        margin-right: 15px;
    }
    .sum{
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        width: 40px;
    }
    .calc{
        text-align: center;
        font-size: 12px;
        height: 40px;
        line-height: 40px;
        display: block;
        color: #fff;
        background-color: orangered;
        width: 80px;
        float: right;
    }
</style>