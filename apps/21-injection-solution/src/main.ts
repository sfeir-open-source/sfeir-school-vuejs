import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { APP_ROUTING } from './router';
import './styles.css';
import { getInjection, PEOPLE_SERVICE_TOKEN } from './token-injection';

const pinia = createPinia();
const app = createApp(App);

app.provide(PEOPLE_SERVICE_TOKEN, getInjection(PEOPLE_SERVICE_TOKEN)).use(APP_ROUTING).use(pinia).mount('#root');
