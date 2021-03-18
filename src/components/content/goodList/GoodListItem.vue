<template>
  <div class="good-list-item">
      <img :src="goodItem.show.img" alt="">
      <div class="good-info">
          <p>{{goodItem.title}}</p>
          <span class="price">{{goodItem.price}}</span>
          <span class="cfav">{{goodItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goodItem:{
            type:Object,
            default(){
                return {};
            }
        }
    }
}
</script>

<style>
    .good-list-item{
        position: relative;
        width: 48%;
        z-index: 8;
        padding-bottom: 40px;
    }
    .good-list-item img{
        width: 100%;
    }
    .good-list-item .good-info{
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    .good-list-item .good-info p{
        /* 文本超出省略 */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    .good-list-item .good-info .price{
        color: var(--color-high-text);
        margin-right: 20px;
    }
    .good-list-item .good-info .cfav{
        position: relative;
    }   
    .good-list-item .good-info .cfav::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>