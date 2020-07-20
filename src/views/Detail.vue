<template>
  <div class="detail" v-if="model">
    <NavBar></NavBar>
    <div class="video">
      <video :src="model.content" controls></video>
    </div>
    <div class="app-btn">
      <div>App内打开，流畅又高清</div>
    </div>
    <van-collapse
      class="collapse"
      style="padding:0"
      v-model="activeNames"
      v-if="model"
    >
      <van-collapse-item style="padding:0" name="1">
        <template #title style="padding:0">
          <div class="video-info" v-if="model.category">
            <van-tag round size="large" text-color="#fb7299" color="#f4f4f4">
              <van-icon name="fire" />
              {{ model.category.title }}
            </van-tag>
            <h2>{{ model.name }}</h2>
          </div>
          <div class="data">
            <div class="up">
              <span class="author" v-if="model.userinfo">
                {{ model.userinfo.name }}
              </span>
              <span class="author" v-else>神秘人</span>
            </div>
            <div class="number">
              <span>66.6万次观看</span>
              <span>2万弹幕</span>
              <span style="padding-top:0.556vw;">{{ model.date }}</span>
            </div>
          </div>
        </template>
        <div>折叠信息</div>
      </van-collapse-item>
    </van-collapse>
    <div class="toolbar">
      <div>
        <van-icon name="good-job" size="25" color="#757575" />
        <span>点赞</span>
      </div>
      <div>
        <van-icon name="star" size="25" color="#757575" />
        <span>点赞</span>
      </div>
      <div>
        <van-icon name="share" size="25" color="#757575" />
        <span>点赞</span>
      </div>
    </div>
    <div class="list">
      <ListItem
        class="item"
        :item="item"
        v-for="(item, index) in commend"
        :key="index"
      ></ListItem>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar'
import ListItem from '../components/common/ListItem'
export default {
  components: { NavBar, ListItem },
  data() {
    return {
      model: {},
      commend: {},
      activeNames: ['0']
    }
  },
  created() {
    this.getDetailData()
    this.getCommendData()
  },
  methods: {
    async getDetailData() {
      const res = await this.$http.get(`/article/${this.$route.params.id}`)
      this.model = res.data[0]
    },
    async getCommendData() {
      const res = await this.$http.get('/commend')
      this.commend = res.data
    }
  },
  watch: {
    $route() {
      this.getDetailData()
      this.getCommendData()
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  height: 100vh;
  background: #fff;
  .video {
    width: 100%;
    video {
      width: 100%;
    }
  }
  .app-btn {
    padding: 3.2vw 3.2vw 0;
    div {
      box-sizing: border-box;
      width: 100%;
      height: 9.6vw;
      border-radius: 4.8vw;
      line-height: 9.6vw;
      color: #fff;
      text-align: center;
      background: #fb7299;
    }
  }
  .video-info {
    display: flex;
    h2 {
      margin: 0 2.667vw;
      padding: 0;
      font-size: 4.267vw;
      font-style: normal;
      font-weight: normal;
    }
  }
  .data {
    display: flex;
    margin-top: 2.133vw;
    font-size: 12px;
    .up {
      color: #212121;
    }
    .number {
      color: #999;
      span {
        margin-left: 2.667vw;
      }
    }
  }
  .toolbar {
    display: flex;
    padding: 0 3.2vw 2.667vw 3.2vw;
    & > div {
      display: flex;
      align-items: center;
      margin-right: 5.333vw;
      span {
        font-size: 2.667vw;
        padding-left: 1.333vw;
        color: #999;
      }
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      width: 47%;
      margin: 10px 0 5px;
    }
  }
}
</style>
