import { createApp, h } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue';

const app = createApp({
  data() {
    return {
      name: 'Sfeir'
    }
  },
  render() {
    return h(App);
  }
});

app.use(ElementPlus);
app.mount('#app');
