<template>
  <div class="portrait">
    <img :src="picture">
  </div>
</template>

<script>
export default {
  name: 'Portrait',
  props: {},
  data () {
    return {
      picture: 'https://johanbos.github.io/johan-bos-large.jpg',
      name: "Johan Bos",
      dateOfBirth: "1983-05-06"
    }
  }
}
</script>

<style scoped>
.portrait {
  margin: 40px 0 0;
  position: relative;
}

.portrait img {
  width: 10em;
  margin-left: 1em;
  border: 0.3em solid black;
  transform: rotate(2deg);
  box-shadow: 5px 10px #888888;
  position: relative;
}
</style>
