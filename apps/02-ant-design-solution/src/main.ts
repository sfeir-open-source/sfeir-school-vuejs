import { createApp } from 'vue';
import './styles.css';

import AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
const app = createApp({
  setup() {
    return {
      name: 'SFEIR',
    };
  },
  template: `
    <a-card title="Hello and Welcome">
      <p>{{ name }}</p>
    </a-card>
  `,
});
app.use(AntDesignVue).mount('#app');
