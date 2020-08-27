<template>
  <form @submit.prevent="onSubmit">
      <div class="form">New Task</div>
      <input type="text" v-model="newTodo" name="name" placeholder="Todo name">
      <input type="submit" value="Add">
    </form>
</template>

<script>
export default {
  data () {
    return {
      newTodo: null
    }
  },
  name: 'addform',
  methods: {
    onSubmit () {
      this.$parent.$emit('onSubmit', this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>
