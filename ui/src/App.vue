<template>
  <div id="app">
    <PagePart>
      <Portrait />
    </PagePart>
    <PagePart>
      Hello World ~ more is coming (not winter)
    </PagePart>
  </div>
</template>

<script>
import PagePart from './components/PagePart.vue'
import Portrait from './components/Portrait.vue'

export default {
  name: 'app',
  components: {
    Portrait, PagePart
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  padding: 0;
}
</style>
