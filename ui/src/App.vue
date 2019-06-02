<template>
  <div id="app">
    <PagePart>
      <Portrait
        :heartItems=bio.heartItems
        :picture=bio.picture
      />
    </PagePart>
    <PagePart>
      <h1>Welcome</h1>
      <span>As everything, things are never finished. More is coming!</span>
    </PagePart>
    <PagePart>
      <h2>Contact {{bio.fullname}}</h2>
      <span>Please send me an <a :href="bio.email | mailTo">e-mail</a> if you want to contact me. Principals only. No recruiters please.</span>
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
        picture: "",
        fullname: "",
        email: "",
        heartItems: [],
      },

    }
  },
  mounted () {
    axios
      .get('https://johanbos.github.io/bio.json')
      .then(response => {
        this.bio = response.data;
      })
  },
  filters: {
    mailTo: function (value) {
      return 'mailto:' + value;
    }
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
