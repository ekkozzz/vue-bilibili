<template>
  <div v-if="model" class="editView">
    <nav-bar style="margin-bottom:12px" />
    <div class="uploadfile">
      <van-uploader
        class="uploadimg"
        preview-size="100vw"
        :after-read="afterRead"
      />
      <edit-banner left="头像">
        <img :src="model.user_img" slot="right" alt="" v-if="model.user_img" />
        <img src="../assets/default_img.jpg" slot="right" alt="" v-else />
      </edit-banner>
    </div>
    <edit-banner left="昵称" @bannerClick="show1 = true">
      <a href="javascrit:;" slot="right">{{ model.name }}</a>
    </edit-banner>
    <edit-banner left="账号">
      <a href="javascrit:;" slot="right">{{ model.username }}</a>
    </edit-banner>
    <edit-banner left="性别" @bannerClick="show3 = true">
      <a href="javascrit:;" slot="right">{{
        model.gender === 0 ? '男' : '女'
      }}</a>
    </edit-banner>
    <edit-banner left="个性签名" @bannerClick="show2 = true">
      <a href="javascrit:;" slot="right">{{ model.user_desc }}</a>
    </edit-banner>

    <van-dialog
      v-model="show1"
      title="昵称"
      show-cancel-button
      @confirm="confirmName"
      @cancel="name = ''"
    >
      <van-field v-model="name" />
    </van-dialog>

    <van-dialog
      v-model="show2"
      title="个性签名"
      show-cancel-button
      @confirm="confirmDesc"
      @cancel="desc = ''"
    >
      <van-field v-model="model.user_desc" type="textarea" />
    </van-dialog>

    <van-action-sheet
      v-model="show3"
      :actions="actions"
      cancel-text="取消"
      description="性别"
      @select="onSelect"
    />

    <div class="back" @click="$router.back()">返回个人中心</div>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar'
import EditBanner from '../components/common/EditBanner'
export default {
  components: { NavBar, EditBanner },
  data() {
    return {
      model: {},
      show1: false,
      show2: false,
      show3: false,
      name: '',
      desc: '',
      actions: [
        { name: '男', val: 0 },
        { name: '女', val: 1 }
      ]
    }
  },
  methods: {
    async selectUser() {
      const res = await this.$http('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
    },
    async afterRead(file) {
      const formdate = new FormData()
      formdate.append('file', file.file)
      const res = await this.$http.post('/upload', formdate)

      this.model.user_img = res.data.url
      this.userUpdate()
    },
    async userUpdate() {
      const res = await this.$http.post(
        '/update/' + localStorage.getItem('id'),
        this.model
      )
      console.log(res)
      if (res.data.code === 200) {
        this.$msg.success('修改成功')
      }
    },
    confirmName() {
      this.model.name = this.name
      this.userUpdate()
    },
    confirmDesc() {
      this.userUpdate()
    },
    onSelect(item) {
      this.show3 = false
      this.model.gender = item.val
      this.userUpdate()
    }
  },
  created() {
    this.selectUser()
  }
}
</script>

<style lang="less" scoped>
.editView {
  a {
    color: #999;
  }
  img {
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
  }
  .uploadfile {
    position: relative;
    overflow: hidden;
    .uploadimg {
      opacity: 0;
      position: absolute;
      width: 100vw;
    }
  }
  .back {
    background: white;
    margin-top: 20px;
    height: 34px;
    line-height: 34px;
    text-align: center;
  }
}
</style>
