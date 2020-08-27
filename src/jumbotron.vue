<template>
  <b-jumbotron>
    <template v-slot:header>Todo List</template>
    <template v-slot:lead>New feature we will have to done for this project</template>
    <hr class="my-4" />
    <p>Easy to use we created this web app just for you !</p>
    <sentence :list="list"></sentence>
    <todo :list="list"></todo>
    <addform></addform>
  </b-jumbotron>
</template>

<script>
import todo from './todo'
import addform from './Addform'
import sentence from './sentence'
export default {
  props: ['list'],
  name: 'jumbotron',
  components: {todo, addform, sentence},
  methods: {
    toggle3: function (uptadedtodo) {
      this.$emit('toggle3', uptadedtodo)
    },
    newTodo: function (data) {
      this.$emit('newTodo', data)
    }
  }
}
</script>

<style>
form{
  margin: 0% 35%;
  display: flex;
  width: 100%;
  height: 40px;
  }
input[type=text]{
  box-shadow: 0 1px 2px 0 #666768;
  border: solid 0.5px #666768;
  text-align: center;
  width: 300px;
  height: 40px;
}
input[type=submit]{
  box-shadow: 0 1px 2px 0 #666768;
  border: solid 0.5px #666768;
  width: 100px;
  height: 40px;
}
.form{
  box-shadow: 0 1px 2px 0 #666768;
  border-radius: 2px;
  border: solid 0.5px #666768;
  padding: 5px;
  width: 100px;
  height: 40px;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
