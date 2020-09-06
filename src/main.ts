import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/icon/icon.css'

import router from './router/index'
import vuex from './store/index'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)



app.use(Antd)
app.use(router)
app.use(vuex)
app.mount('#app')
