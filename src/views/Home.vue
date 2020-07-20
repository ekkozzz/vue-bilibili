<template>
  <div>
    <nav-bar />
    <van-tabs v-model="active" sticky>
      <van-tab v-for="items in category" :title="items.title" :key="items._id">
        <van-list
          v-model="items.loading"
          :finished="items.finished"
          finished-text="到底了啦"
          :immediate-check="false"
          @load="onLoad"
        >
          <div class="list">
            <list-item
              class="item"
              :item="item"
              v-for="(item, index) in items.list"
              :key="index"
            />
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar'
import ListItem from '../components/common/ListItem'
export default {
  components: { NavBar, ListItem },
  data() {
    return {
      category: [],
      active: 0
    }
  },
  methods: {
    async selectCategory() {
      const res = await this.$http.get('/category')
      this.changeCategory(res.data)
    },
    changeCategory(data) {
      const res = data.map(item => {
        item.list = []
        item.page = 0
        item.pagesize = 10
        item.loading = false
        item.finished = false
        return item
      })
      this.category = res
      this.getActiveData()
    },
    async getActiveData() {
      const categoryItem = this.categoryItem()
      const res = await this.$http.get('/detail/' + categoryItem._id, {
        params: {
          page: categoryItem.page,
          pagesize: categoryItem.pagesize
        }
      })
      categoryItem.list.push(...res.data)
      categoryItem.loading = false
      if (res.data.length < categoryItem.pagesize) {
        categoryItem.finished = true
      }
    },
    categoryItem() {
      const res = this.category[this.active]
      return res
    },
    onLoad() {
      const categoryItem = this.categoryItem()
      setTimeout(() => {
        categoryItem.page++
        this.getActiveData()
      }, 1000)
    }
  },
  created() {
    this.selectCategory()
  },
  watch: {
    active() {
      this.getActiveData()
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    width: 47%;
    margin: 10px 0 5px;
  }
}
</style>
