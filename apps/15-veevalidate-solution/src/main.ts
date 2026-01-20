import { createApp } from 'vue';
import App from './App.vue';
import { APP_ROUTING } from './router';
import './styles.css';
import './vee-validate.config';

const app = createApp(App);
app.use(APP_ROUTING).mount('#root');
