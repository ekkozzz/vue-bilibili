<template>
  <div class="LoginTop">
    <div></div>
    <div>{{ middleTop }}</div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['middleTop']
}
</script>

sty
<style lang="less" scoped>
.LoginTop {
  display: flex;
  height: 12vw;
  background: white;
  & > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.267vw;
    &.right {
      font-size: 12px;
    }
  }
}
</style>
