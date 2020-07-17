<template>
  <div class="btn">
    <div class="LoginBtn" @click="resgiterClick">{{ btntext }}</div>
  </div>
</template>

<script>
export default {
  props: ['btntext'],
  methods: {
    resgiterClick() {
      this.$emit('resgiterSubmit')
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  padding: 4vw 2.667vw;
  .LoginBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vw;
    color: white;
    font-size: 4.267vw;
    background: #ff9db5;
    border-radius: 50px;
  }
}
</style>
