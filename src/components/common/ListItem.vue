<template>
  <div @click="$router.push('/detail/' + item.id)">
    <div class="card">
      <img :src="item.img" alt="" width="100%" />
      <div class="count">
        <span>{{ item.commentlen ? item.commentlen : 0 }}</span>
        <span>6666</span>
      </div>
    </div>
    <p>{{ item.name }}</p>
  </div>
</template>

<script>
export default {
  props: ['item']
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
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
    color: #fff;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
  }
}
</style>
