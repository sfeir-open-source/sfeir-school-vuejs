import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { APP_ROUTING } from './router';
import './styles.css';

const pinia = createPinia();
const app = createApp(App);

app.use(APP_ROUTING).use(pinia).mount('#root');
