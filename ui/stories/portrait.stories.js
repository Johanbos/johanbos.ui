/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import Portrait from '../src/components/Portrait'


storiesOf('Portrait', module).add('empty', () => ({
  components: { Portrait },
  template: '<Portrait />',
  methods: {},
})).add('content', () => ({
    components: { Portrait },
    template: '<Portrait picture="http://lorempixel.com/200/400/" heartItems="The World" />',
    methods: {},
}));

/* eslint-enable react/react-in-jsx-scope */
