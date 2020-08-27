<template>
  <p v-if="counter === this.list.length" class="red"><b-icon icon="emoji-angry"></b-icon> It's time to start working you have {{this.list.length}} tasks to do !! <b-icon icon="emoji-angry"></b-icon></p>
  <p v-else-if="counter === 0" class="vert"><b-icon icon="emoji-sunglasses"></b-icon> Congratulation !! You finished all the {{this.list.length}} tasks <b-icon icon="emoji-sunglasses"></b-icon></p>
  <p v-else-if="counter < this.list.length / 2 " class="ligthgreen"><b-icon icon="emoji-laughing"></b-icon> Continue that way and you will finish soon, still have {{counter}} tasks <b-icon icon="emoji-laughing"></b-icon></p>
  <p v-else class="orange"><b-icon icon="emoji-smile"></b-icon> Good !! you made {{this.list.length - counter}}/{{this.list.length}} tasks <b-icon icon="emoji-smile"></b-icon></p>

</template>

<script>
export default {
  name: 'sentence',
  props: ['list'],
  computed: {
    counter: function () {
      let counter = 0
      this.list.forEach((element) => {
        if (element.todo) {
          counter++
        }
      })
      return counter
    }
  }
}
</script>

<style>
  .vert {
    color:green;
  }
  .ligthgreen {
    color: rgb(145, 211, 46);
  }
  .orange {
    color: orange;
  }
  .red {
    color: red;
  }
</style>
