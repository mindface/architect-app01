import { createApp } from 'vue'
import './style.css'
import * as VueRouter from 'vue-router';
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Home from './pages/Home.vue';
import About from './pages/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router).use(ElementPlus).mount('#app')
