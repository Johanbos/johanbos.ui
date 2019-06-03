<template>
  <div class="container">
    <template v-for="(item, key) in items">
      <div
        class="item, title"
        :key="`${key}-title`"
      >
        {{item.title}}
      </div>
      <div
        class="item, passion"
        :key="`${key}-passion`"
      >
      <span v-for="(key) in item.passion" :key=key>⭐️</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'Interests',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1em;
  align-items: center;
}
</style>
