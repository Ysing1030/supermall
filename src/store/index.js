import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        carList:[]
    },
    mutations:{
        addShopCar(state,goods){
        // 判断购物车是否已经有该商品
            let res = state.carList.find((item,index,arr) => {
                    if(item.id === goods.id){
                        arr[index].count ++;
                        return true;
                    }
                })
        // 如果商品不在
            if(!res){
                goods.count = 1;
                goods.checked = true;
                state.carList.push(goods)
            }  
        }
    },
    action:{

    },
    getters:{
        carList(state){
            return state.carList;
        },
        carListLength(state,getters){
            return getters.carList.length;
        }
    }
})

export default store;