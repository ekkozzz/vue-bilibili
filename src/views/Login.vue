<template>
  <div class="Register">
    <LoginTop middleTop="登录BILIBILI">
      <div slot="right" @click="$router.push('/register')">切换到注册</div>
    </LoginTop>
    <LoginText
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,15}$"
      @inputChange="res => (model.username = res)"
      style="margin:4vw 0"
    />
    <LoginText
      label="密码"
      type="password"
      placeholder="请输入密码"
      rule="^.{6,15}$"
      @inputChange="res => (model.password = res)"
    />
    <LoginBtn btntext="登录" @resgiterSubmit="resgiterSubmit" />
  </div>
</template>

<script>
import LoginTop from '../components/common/LoginTop'
import LoginText from '../components/common/LoginText'
import LoginBtn from '../components/common/LoginBtn'
export default {
  name: 'Login',
  components: { LoginTop, LoginText, LoginBtn },
  data() {
    return {
      model: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async resgiterSubmit() {
      let rulg = /^.{6,15}$/
      if (rulg.test(this.model.username) && rulg.test(this.model.password)) {
        const res = await this.$http.post('/login', this.model)
        const { msg, id, token } = res.data
        this.$msg.success(msg)
        localStorage.setItem('id', id)
        localStorage.setItem('Token', token)
        this.$router.push('/')
      } else {
        this.$msg.fail('格式不正确')
      }
    }
  }
}
</script>
