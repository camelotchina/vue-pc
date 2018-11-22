<template>
    <label :class="wrapClasses"  @click="clickChecked">
        <span :class="checkboxClasses" >
        <span class="ivu-checkbox-inner"></span>
        <input type="hidden" class="ivu-checkbox-input" v-model="value">
        </span>
        <span>{{name}}</span>
    </label>
</template>

<script>
export default {
  name: 'checkbox',
  data () {
    return {
      isChecked: false
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    name: {
      type: [String, Number, Boolean],
      default: false
    },
    checked: {
      type: [Boolean],
      default: false
    }
  },
  computed: {
    checkboxClasses () {
      return this.isChecked
        ? 'ivu-checkbox ivu-checkbox-checked'
        : 'ivu-checkbox'
    },
    wrapClasses () {
      return this.isChecked
        ? 'ivu-checkbox-wrapper ivu-checkbox-wrapper-checked ivu-checkbox-default'
        : ' ivu-checkbox-wrapper ivu-checkbox-default'
    }
  },
  mounted () {
    this.isChecked = this.checked
  },
  methods: {
    clickChecked (ev) {
      this.isChecked = !this.isChecked
      this.$emit('changes', {
        isChecked: this.isChecked,
        value: this.value,
        name: this.name
      })
    }
  },
  watch: {
    checked (val) {
      this.isChecked = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
</style>
