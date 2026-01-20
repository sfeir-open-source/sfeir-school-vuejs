import { createApp } from 'vue';
import './styles.css';

createApp({
  setup() {
    const name = 'SFEIR';
    return { name };
  },
}).mount('#app');
