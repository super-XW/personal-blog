import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/icon/icon.css'

import router from './router/index'
import vuex from './store/index'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './api/provider'

import $http from './service/request'
// https://v3.vuejs.org/api/application-config.html#devtools
const app = createApp(App)

app.config = {
    /**
     * 将其设置为true可以在浏览器的devtool性能/时间轴面板中启用组件init、编译、渲染和修补性能跟踪。只在开发模式和支持性能的浏览器中工作。马克API
     */
    performance: true,
    /**
     * 定义自定义选项的合并策略。合并策略接收在父实例和子实例上定义的那个选项的值，分别作为第一个和第二个参数。上下文应用程序实例作为第三个参数传递
     */
    optionMergeStrategies: {

    },
    /**
     * 添加可在应用程序内的任何组件实例中访问的全局属性。当存在键冲突时，组件的属性将具有优先级。
     */
    globalProperties: {
        "$http": $http
    },
    /**
     * 指定一个方法来识别在Vue之外定义的自定义元素(例如，使用Web组件api)。如果组件符合这个条件，它就不需要本地或全局注册，Vue也不会抛出关于未知自定义元素的警告。
     */
    isCustomElement: tag => tag.startsWith('ion-'),

}

app.use(Antd)
app.use(router)
app.use(vuex)
app.mount('#app')

