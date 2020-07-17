<template>
  <div class="userdetail">
    <div class="part1">
      <div class="avatar">
        <img :src="userinfo.user_img" alt="" v-if="userinfo.user_img" />
        <img src="../../assets/default_img.jpg" alt="" v-else />
      </div>
      <div class="relation">
        <div class="count">
          <p>
            <span>4396</span>
            <span class="type">粉丝</span>
          </p>
          <span class="line"></span>
          <p>
            <span>2200</span>
            <span class="type">关注</span>
          </p>
          <span class="line"></span>
          <p>
            <span>7777</span>
            <span class="type">获赞</span>
          </p>
        </div>
        <div class="followbtn" @click="$router.push('/edit')">编辑资料</div>
      </div>
    </div>
    <div class="part2">
      <span class="name">{{ userinfo.name }}</span>
      <div class="content">
        <span class="text" :class="{ spread: spread }">
          {{
            userinfo.user_desc
              ? userinfo.user_desc
              : '这家伙很懒，什么都没留下！'
          }}
        </span>
        <span class="spread-btn" @click="taggleSpreda">{{
          spread ? '收起' : '展开'
        }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['userinfo'],
  data() {
    return {
      spread: false
    }
  },
  methods: {
    taggleSpreda() {
      this.spread = !this.spread
    }
  }
}
</script>
<style lang="less" scoped>
.userdetail {
  background: white;
  padding: 0 3.2vw;
  .part1 {
    display: flex;
    justify-content: space-between;
    .avatar {
      position: relative;
      width: 84px;
      height: 84px;
      border-radius: 50px;
      overflow: hidden;
      top: -10px;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    .relation {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 220px;
      .count {
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-right: 1px;
          vertical-align: middle;
          .type {
            font-size: 11px;
            color: #999;
          }
        }
        .line {
          display: inline-block;
          text-align: center;
          vertical-align: middle;
          width: 1px;
          height: 20px;
          background: #e7e7e7;
        }
      }
      .followbtn {
        width: 100%;
        text-align: center;
        height: 28px;
        line-height: 28px;
        color: #fb7299;
        background: #fff;
        border: 1px solid #fb7299;
        border-radius: 5px;
      }
    }
  }
  .part2 {
    padding: 12px;
    background: white;
    .name {
      display: inline-block;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      color: #212121;
    }
    .content {
      display: flex;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .text {
        flex: 1;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &.spread {
          white-space: normal;
        }
      }
      .spread-btn {
        display: inline-block;
        color: #1389bf;
        margin-left: 10px;
      }
    }
  }
}
</style>
