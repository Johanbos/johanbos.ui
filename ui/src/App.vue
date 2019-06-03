<template>
  <div id="app">
    <PagePart>
      <Portrait
        :heartItems=bio.heartItems
        :picture=bio.picture
      />
    </PagePart>
    <PagePart>
      <h2>To-do</h2>
      <p>I'd like to focus on whats next, there is so much cool stuff!</p>
      <Todo :items=todo />
    </PagePart>
    <PagePart>
      <h2>Interests</h2>
      <p></p>
      <Interests :items=interests />
    </PagePart>
    <PagePart>
      <h2>Employers</h2>
      <Employers :items=employers />
    </PagePart>
    <PagePart>
      <h2>Achievements</h2>
      <Achievements :items=achievements />
    </PagePart>
    <PagePart>
      <h2>Contact {{bio.fullname}}</h2>
      <span>Please send me an <a :href="bio.email | mailTo">e-mail</a> if you want to contact me. Principals only. No recruiters please.</span>
    </PagePart>
  </div>
</template>

<script>
import axios from 'axios';
import PagePart from './components/PagePart.vue'
import Portrait from './components/Portrait.vue'
import Employers from './components/Employers.vue'
import Todo from './components/Todo.vue'
import Interests from './components/Interests.vue'
import Achievements from './components/Achievements.vue'

export default {
  name: 'app',
  components: {
    Employers, Todo, Portrait, PagePart, Interests, Achievements
  },
  data () {
    return {
      bio: {
        picture: "",
        fullname: "",
        email: "",
        heartItems: [],
      },
      employers: [],
      todo: [],
      interests: [],
      achievements: []
    }
  },
  mounted () {
    axios
      .get('https://johanbos.github.io/bio.json')
      .then(response => this.bio = response.data);
    axios
      .get('https://johanbos.github.io/employers.json')
      .then(response => this.employers = response.data);
    axios
      .get('https://johanbos.github.io/to-do.json')
      .then(response => this.todo = response.data);
    axios
      .get('https://johanbos.github.io/interests.json')
      .then(response => this.interests = response.data);
    axios
      .get('https://johanbos.github.io/achievements.json')
      .then(response => this.achievements = response.data);
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
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgb(230, 230, 230) 50%, rgba(255,255,255,1) 100%);
}
</style>
