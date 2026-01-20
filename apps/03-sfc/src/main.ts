import AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { createApp } from 'vue';
import './styles.css';

const app = createApp({
  setup() {
    return {
      name: 'SFEIR',
    };
  },
  template: `<a-card title="Hello and Welcome">
      <p>{{ name }}</p>
    </a-card>`,
});
app.use(AntDesignVue).mount('#root');
