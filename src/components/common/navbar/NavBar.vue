<template>
  <div class="navBar">
      <div class="right"><slot name="left" /></div>
      <div class="center"><slot name="center" /></div>
      <div class="left"><slot name="right" /></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scpoed>
    .navBar{
        height: 44px;
        line-height: 44px;
        display: flex;
        text-align: center;
        color: white;
        font-size: 16px;
    }
    .navBar .right{
        width: 60px;
    }
    .navBar .left{
        width: 60px;
    }
    .navBar .center{
        flex: 1;
    }
</style>