<template>
  <div>
    <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      v-model="content"
    />
  </div>
</template>

<script>
export default {
  props: ['label', 'type', 'placeholder', 'rule'],
  data() {
    return {
      content: ''
    }
  },
  methods: {
    handleulg() {
      const reg = new RegExp(this.rule)
      if (reg.test(this.content)) {
        this.$emit('inputChange', this.content)
      }
    }
  },
  watch: {
    content() {
      this.handleulg()
    }
  }
}
</script>
