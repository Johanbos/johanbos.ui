<template>
  <div id="app">
    <PagePart>
      <Portrait
        :heartItems=portraitHeartItems
        :picture=bio.picture
      />
    </PagePart>
    <PagePart>
      <h1>Welcome</h1>
      <span>As everything, things are never finished. More is coming!</span>
    </PagePart>
    <PagePart>
      <h2>Contact</h2>
      <span>Please send me an <a href="mailto:johan@coconote.nl">e-mail</a> if you want to contact me. Principals only. No recruiters please.</span>
    </PagePart>
  </div>
</template>

<script>
import PagePart from './components/PagePart.vue'
import Portrait from './components/Portrait.vue'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Portrait, PagePart
  },
  data () {
    return {
      bio: {
        picture: "https://johanbos.github.io/johan-bos-2019-400-600.jpg",
        fullname: ""
      },
      portraitHeartItems: ["Code", "Teamwork", "Continuous Delivery", "Metrics"]
    }
  },
  getBioData() {
    axios.get(`https://johanbos.github.io/bio.json`)
      .then(response => {
        this.bio = response.data;
      })
      .catch(e => {
        this.errors.push(e)
      })
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
