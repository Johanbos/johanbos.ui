/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import PagePart from '../src/components/PagePart';

storiesOf('PagePart', module)
  .add('little content', () => ({
    components: { PagePart },
    template: '<PagePart>Hello World</PagePart>',
    methods: {},
  }))
  .add('much content', () => ({
    components: { PagePart },
    template: '<PagePart>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam mollis feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque lorem ipsum, ultrices vitae scelerisque non, tristique finibus justo. Aenean vestibulum feugiat molestie. Vestibulum a porttitor justo. Ut congue suscipit orci, ac maximus turpis rhoncus ac. Morbi tempor molestie hendrerit. Duis vestibulum nisi porta luctus rhoncus. Vestibulum dapibus ipsum sit amet nisl aliquam, ac vulputate arcu accumsan. Ut ante justo, mattis in mauris in, placerat bibendum neque. Suspendisse mollis lacus eu vestibulum suscipit. </PagePart>',
    methods: {},
  }));

/* eslint-enable react/react-in-jsx-scope */
