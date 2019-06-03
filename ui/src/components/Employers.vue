<template>
  <VueFaqAccordion
    :items="items"
    questionProperty="title"
    answerProperty="description"
  />
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'
import moment from 'moment'

export default {
  components: {
    VueFaqAccordion
  },
  name: 'Employers',
  props: {
    employers: {
      type: Array,
      required: true
    }
  },
  computed: {
    items: function () {
      return Array.from(this.employers, i => {
        var diff = moment.duration(moment().diff(i.ended ? i.ended : i.started)).asYears().toFixed(1);
        var duration = i.ended ? `${diff} years ago` : `since ${diff} years`;
        return {
          title: `${i.title} <small>${duration}</small>`,
          description: `<p>${i.started} ~ ${i.ended}</p><p>${i.description}</p><p><a href='${i.reference}' target='_blank'>${i.reference}</a></p>`
        };
      });
    }
  }
}
</script>

<style scoped>
ul {
  padding: 0;
}
li {
  position: relative;
  display: grid;
  grid-template-columns: 10fr 7fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
}
.item {
  margin-top: 0.3em;
}
</style>
