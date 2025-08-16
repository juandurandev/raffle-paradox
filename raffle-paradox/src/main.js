import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import HelloWorld from './components/HelloWorld.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

app.component('HelloWorld',HelloWorld);

app.mount('#app')
