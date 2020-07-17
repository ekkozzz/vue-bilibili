<template>
  <div class="EditBanner" @click="bannerClick">
    <span>{{ left }}</span>
    <span><slot name="right"></slot></span>
  </div>
</template>

<script>
export default {
  props: ['left', 'right'],
  methods: {
    bannerClick() {
      this.$emit('bannerClick')
    }
  }
}
</script>

<style lang="less" scoped>
.EditBanner {
  display: flex;
  background: white;
  padding: 4vw;
  font-size: 4vw;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.267vw solid #eee;
}
</style>
