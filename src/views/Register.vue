<template>
  <div class="Register">
    <LoginTop middleTop="注册BILIBILI">
      <div slot="right" @click="$router.push('/login')">切换到登录</div>
    </LoginTop>
    <LoginText
      label="用户名"
      placeholder="请输入用户名"
      style="margin:4vw 0"
      rule="^.{6,15}$"
      @inputChange="res => (model.name = res)"
    />
    <LoginText
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,15}$"
      @inputChange="res => (model.username = res)"
    />
    <LoginText
      label="密码"
      type="password"
      placeholder="请输入密码"
      rule="^.{6,15}$"
      @inputChange="res => (model.password = res)"
    />
    <LoginBtn btntext="注册" @resgiterSubmit="resgiterSubmit" />
  </div>
</template>

<script>
import LoginTop from '../components/common/LoginTop'
import LoginText from '../components/common/LoginText'
import LoginBtn from '../components/common/LoginBtn'
export default {
  name: 'Register',
  components: { LoginTop, LoginText, LoginBtn },
  data() {
    return {
      model: {
        name: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async resgiterSubmit() {
      let rulg = /^.{6,15}$/
      if (
        rulg.test(this.model.name) &&
        rulg.test(this.model.username) &&
        rulg.test(this.model.password)
      ) {
        const res = await this.$http.post('/register', this.model)
        console.log(res)
        const { msg, id, objtoken } = res.data
        this.$msg.success(msg)
        localStorage.setItem('id', id)
        localStorage.setItem('Token', objtoken)
        setTimeout(() => {
          this.$router.push('/')
        }, 1000)
      } else {
        this.$msg.fail('格式不正确')
      }
    }
  }
}
</script>
