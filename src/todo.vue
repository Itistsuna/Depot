<template>
  <ul>
    <singletodo :item="item"  v-bind:key="item.id" v-for="item in list"></singletodo>
  </ul>
</template>

<script>
import singletodo from './singletodo'
export default {
  props: ['list'],
  name: 'todo',
  components: { singletodo },
  methods: {
    toggle2: function (uptadedtodo) {
      this.$emit('toggle2', uptadedtodo)
    }
  }
}
</script>
