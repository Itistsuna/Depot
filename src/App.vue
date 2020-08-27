<template>
  <div id="app">
    <jumbotron :list='list' v-on:toggle="toggle3" v-on:onSubmit="newTodo"></jumbotron>
  </div>
</template>

<script>
import jumbotron from './jumbotron'
export default {
  name: 'app',
  components: {jumbotron},
  data () {
    return {
      list: [
        {id: 0, name: 'Ecrire le sujet', todo: true},
        {id: 1, name: 'Faire le sujet', todo: true},
        {id: 2, name: 'Vendre le sujet', todo: true},
        {id: 3, name: 'Partir en vacances', todo: true}
      ]
    }
  },
  methods: {
    toggle3: function (uptadedtodo) {
      this.list.forEach((element) => {
        if (element.id === uptadedtodo) {
          if (element.todo === false) {
            element.todo = true
          } else {
            element.todo = false
          }
        }
      })
    },
    counter: function () {
      let counter = 0
      this.list.forEach((element) => {
        if (element.todo === true) {
          counter++
        }
      })
      return counter
    },
    newTodo: function (data) {
      if (data !== undefined && data !== '' && data !== null) {
        this.list.push({
          id: this.list.length,
          name: data,
          todo: true
        })
      }
    }
  }
}
</script>
