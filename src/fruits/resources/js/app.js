import './bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'; //追記
import 'element-plus/dist/index.css'; //追記

const app = createApp(App);

app.use(ElementPlus); //追記

app.mount('#app');
