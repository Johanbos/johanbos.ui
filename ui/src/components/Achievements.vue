<template>
  <VueFaqAccordion
    :items="itemsFormatted"
    questionProperty="title"
    answerProperty="description"
    tabName="category"
  />
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'
import moment from 'moment'

export default {
  components: {
    VueFaqAccordion
  },
  name: 'Achievements',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    itemsFormatted: function () {
      return Array.from(this.items, i => {
        var diff = moment.duration(moment().diff(i.completed)).asYears().toFixed(1);
        var duration = `${diff} years ago`;
        return {
          title: `${i.title} <small>${duration}</small>`,
          description: `<p>${i.completed}</p><p>${i.motivator}</p><p><a href='${i.reference}' target='_blank'>${i.reference}</a></p>`,
          category: i.category
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
