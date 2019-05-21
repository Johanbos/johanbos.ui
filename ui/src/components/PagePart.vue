<template>
  <div
    class="pagepart"
    :style="styleX"
  >
    <slot></slot>
    <div
      class="fidget"
      :style="styleX"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'PagePart',
  props: {},
  computed: {
    styleX () {
      var hue = Math.floor(Math.random() * 360);
      return 'background-color: hsl(' + hue + ', 100%, 87.5%)';
    }
  }
}
</script>

<style scoped>
.pagepart {
  text-align: center;
  padding: 5em;
  position: relative;
}
.fidget {
  width: 4em;
  height: 2em;
  border-bottom-left-radius: 4em;
  border-bottom-right-radius: 4em;
  position: absolute;
  bottom: -2em;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
</style>
