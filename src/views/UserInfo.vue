<template>
  <div class="UserInfo">
    <nav-bar />
    <img src="../assets/bannerTop_new.png" alt="" class="backimg" />
    <user-detail :userinfo="model" />
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar'
import UserDetail from '../components/common/UserDetail'
export default {
  components: { NavBar, UserDetail },
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async getUserInfo() {
      const res = await this.$http('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
      console.log(this.model)
    }
  },
  created() {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.UserInfo {
  .backimg {
    display: block;
    width: 100vw;
    height: 90px;
  }
}
</style>
