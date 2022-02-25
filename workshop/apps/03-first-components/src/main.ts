import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp({
  data() {
    return {
      name: 'Sfeir'
    };
  }
});

app.use(ElementPlus);
app.mount('#app');
