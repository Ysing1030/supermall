<template>
  <div id="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 #tabbar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    background-color:#f6f6f6 ;
    box-shadow: 0px -1px 0.1px rgba(220, 220, 220, 0.5);
    z-index: 999;
  }
</style>