import { createApp, VueElement } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://www.escook.cn'
VueElement.prototype.$axios = axios

createApp(App).mount('#app')
