<template>
    <div>
        <det-nav 
        class="det-nav"
        @scrollPointArea="scrollPointArea"
        ></det-nav>
        <scroll class="content"
         :probeType="3"
         ref="scroll"
         @scroll="scroll"
        >
            <det-swiper ref="base" :topImages="topImages"></det-swiper>
            <det-goods-info :goodsInfo="goodsInfo"></det-goods-info>
            <det-shop :shopInfo="shopInfo"></det-shop>
            <det-det-data  @imageLoaded="imageLoaded" :detData="detData"></det-det-data>
            <det-param ref="param" :detParam="detParam"></det-param>
            <det-comments ref="comments" :detComments="detComments"></det-comments>
            <det-recommend ref="recomend" :detRecommend="detRecommend"></det-recommend>
        </scroll>
        <back-up 
        class="back-up"
        v-show="isShowToUp"
        @click.native="backUpClick"
        ></back-up>
        <det-bottom-bar @addGoodsToCar="addGoodsToCar" />
    </div> 
</template>

<script>
/* 公共组件导入 */
import Scroll from 'components/common/scroll/Scroll' 
import BackUp from 'components/content/backUp/BackUp'


/* 子组件导入 */
import DetNav from './detailChildcomps/DetNav'
import DetSwiper from './detailChildcomps/DetSwiper'
import DetGoodsInfo from './detailChildcomps/DetgoodsInfo'
import DetShop from './detailChildcomps/DetShop'
import DetDetData from './detailChildcomps/DetDetdata'
import DetParam from './detailChildcomps/DetParam'
import DetComments from './detailChildcomps/DetComments'
import DetRecommend from './detailChildcomps/DetRecommend'
import DetBottomBar from './detailChildcomps/DetBottomBar'

/* 网络请求模块的导入 */
import { getDetailData,getDetailRecomd,Goods,Shop,GoodsParam } from 'network/detail'

/* 第三方库 */
import { debounce } from "common/utills"

export default {
   name:'Detail',
   data(){
       return{
           goodsId : '',
           topImages:[],
           goodsInfo:{},
           shopInfo:{},
           detData:{},
           detParam:{},
           detComments:[],
           detRecommend:[],
           isShowToUp:false,
           pointAreaY:[]
       }
   },
   components:{
       Scroll,
       BackUp,
       DetNav,
       DetSwiper,
       DetGoodsInfo,
       DetShop,
       DetDetData,
       DetParam,
       DetComments,
       DetRecommend,
       DetBottomBar
   },
    created(){
        this.goodsId = this.$route.params.iid;
        getDetailData(this.goodsId).then(res => {  
            // console.log(res);
            // 1.获取轮播图图片
            const data = res.result;
            this.topImages = data.itemInfo.topImages

            //2.获取商品信息
            this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

            // 3.获取商家信息
            this.shopInfo = new Shop(data.shopInfo)

            // 4.获取商品详细数据
            this.detData = data.detailInfo;

            // 5.获取商品参数信息
            this.detParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
           
            // 6.获取评论数据
            this.detComments = data.rate.list
        })
           // 7.获取推荐数据
        getDetailRecomd().then((res,error) => {
            // console.log(res);
            if(error) return;
            this.detRecommend = res.data.list;
        }) 
    },
    mounted(){
      // 实现防抖
      let refresh = debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('imgLoaded',() => {
        refresh()
      })
     /*  this.$bus.$on('imgLoaded',() => {
        this.$refs.scroll.refresh();
      }) */
    },
    methods:{
        imageLoaded(){
            this.$refs.scroll.refresh()
        },
        scroll(positionY){
            this.isShowToUp = (-positionY) > 1000
        },
        backUpClick(){
            this.$refs.scroll.backUp(0,0)
        },
    //   点击混动到指定位置
        scrollPointArea(index){
            this.pointAreaY = [];
            this.pointAreaY[0] = 0;
            this.pointAreaY[1] = this.$refs.param.$el.offsetTop;
            this.pointAreaY[2] = this.$refs.comments.$el.offsetTop;
            this.pointAreaY[3] = this.$refs.recomend.$el.offsetTop;

        this.$refs.scroll.backUp(0,-this.pointAreaY[index])
        },
        // 点击添加购物车
        addGoodsToCar(){
            let goods = {}
            goods.id = this.goodsId;
            goods.imgURL = this.topImages[0]
            goods.title = this.goodsInfo.title
            goods.desc = this.goodsInfo.desc;
            goods.newPrice = this.goodsInfo.realPrice;

        //   console.log(goods);
        this.$store.commit('addShopCar',goods)
        }
    }

}
</script>

<style scoped>
    .det-nav{
        background-color: #fff;
        position: relative;
        z-index: 102;
    }
    .content{
        height: calc(100vh - 100px);
        background-color: #fff;
        position: relative;
        z-index: 101;
        overflow: hidden;
    }
    .back-up{
        z-index: 103;
    }
</style>