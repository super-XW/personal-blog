import { createApp,defineComponent,AppConfig } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/icon/icon.css'

import router from './router/index'
import vuex from './store/index'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import $http from './services/request'
// https://v3.vuejs.org/api/application-config.html#devtools
const app = createApp(App)
app.config = {
    performance:false,
    globalProperties:{
        "axios":$http
    },
    optionMergeStrategies:{
    },
    isCustomElement:() => false

}
app.use(Antd)
app.use(router)
app.use(vuex)
app.mount('#app')

