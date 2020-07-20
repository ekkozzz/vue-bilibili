<template>
  <div v-if="item" @click="toPath">
    <div class="card">
      <img :src="item.img" alt="" width="100%" height="100px" />
      <div class="count">
        <div>
          <van-icon name="play-circle-o" />
          <span>{{ item.commentlen ? item.commentlen : 0 }}</span>
        </div>
        <div>
          <van-icon name="coupon-o" />
          <span>666</span>
        </div>
      </div>
    </div>
    <p>{{ item.name }}</p>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    toPath() {
      if (this.$route.path != `/detail/${this.item.id}`)
        this.$router.push(`/detail/${this.item.id}`)
    }
  }
}
</script>

<style lang="less" scoped>
p {
  padding: 0;
  margin: 0;
  font-size: 12px;
}
.card {
  position: relative;
  .count {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    color: #fff;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
    & > div {
      display: flex;
      align-items: center;
      span {
        margin-left: 0.8vw;
      }
    }
  }
}
</style>
