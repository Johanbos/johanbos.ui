<template>
  <ul>
    <li v-for="(item, key) in items" :key="key">{{item.name}}</li>
  </ul>
</template>

<script>
export default {
  components: {
  },
  name: 'Todo',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
ul {
  text-align: left;
  margin: auto;
  width: fit-content;
}
</style>
