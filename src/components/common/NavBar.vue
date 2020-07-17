<template>
  <div class="NavBar">
    <div class="logo">
      <router-link to="/" tag="div"
        ><img src="../../assets/logo.png" alt=""
      /></router-link>
    </div>
    <div class="search">
      <van-icon name="search" />
      哔哩哔哩动画
    </div>
    <div class="face">
      <img :src="url" alt="" />
    </div>
    <div class="download">
      下载 App
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  async mounted() {
    const res = await this.$http.get('/user/' + localStorage.getItem('id'))
    this.url = res.data[0].user_img
  }
}
</script>

<style lang="less" scoped>
.NavBar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  height: 11.733vw;
  padding-right: 12px;
  .logo {
    width: 26.667vw;
    img {
      height: 44px;
    }
  }
  .search {
    flex: 1;
    background: #f4f4f4;
    height: 6.4vw;
    line-height: 6.4vw;
    color: #999;
    font-size: 2.66667vw;
    border-radius: 3.2vw;
    padding: 0 10px;
    vertical-align: middle;
    overflow: hidden;
    .van-icon {
      font-size: 14px;
      vertical-align: middle;
    }
  }
  .face {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    margin: 0 12px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .download {
    width: 80px;
    height: 24px;
    background: #fb7299;
    color: white;
    font-size: 3.46667vw;
    line-height: 24px;
    text-align: center;
    border-radius: 2px;
  }
}
</style>
