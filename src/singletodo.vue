<template>
    <li v-if="item.todo === true" v-on:click="toggle(item)">
      <b-icon icon="check2-circle" ></b-icon>
      {{' '+item.name}}
    </li>
    <li v-else class="barré" v-on:click="toggle(item)">
      <b-icon icon="check-circle-fill" ></b-icon>
      {{' '+item.name}}
    </li>
</template>

<script>
export default {
  name: 'singletodo',
  props: ['item'],
  methods: {
    toggle (item) {
      this.$parent.$parent.$emit('toggle', item.id)
    }
  }
}
</script>

<style>
li {
  margin-left: 43.5%;
  list-style: none;
  cursor: pointer;
  width: 200px;
}
.barré {
  text-decoration: line-through;
  color: #746d6d;
}
</style>
