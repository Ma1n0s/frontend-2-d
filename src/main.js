// import { createApp } from 'vue'
// import App from './App.vue'
// import './assets/main.css'
// import router from '@/src/routes';

// createApp(App)
//   .use(router)
//   .mount('#app');

// // createApp(App).mount('#app')

import './assets/main.css'

import { createApp } from 'vue'

// import Vue from 'vue';
import App from './App.vue'


import router from '@/router'
import axios, { Axios } from 'axios'
// axios.defaults.baseURL = 'http://http://localhost:5173/login';

const url = import.meta.env.VITE_BACKEND_URL
axios.get(`http://localhost:80/sanctum/csrf-cookie`);


const app = createApp(App)
app.use(router)
app.mount('#app')