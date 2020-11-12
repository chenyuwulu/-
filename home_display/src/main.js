import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
import axios from "axios"

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.config.productionTip = false
app.use(Antd)
app.use(router)
app.use(store)
app.mount("#app")
