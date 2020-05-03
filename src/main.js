import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'


import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import "@/assets/css/markdown.css"

Vue.use(mavonEditor);
Vue.config.productionTip = false
// 'yyyy-MM-dd hh:mm:ss'
Vue.filter("formatter",function(thistime,fmt = 'yyyy-MM-dd'){
  let $this = new Date(thistime)
      let o = {
        'M+': $this.getMonth() + 1,
        'd+': $this.getDate(),
        'h+': $this.getHours(),
        'm+': $this.getMinutes(),
        's+': $this.getSeconds(),
        'q+': Math.floor(($this.getMonth() + 3) / 3),
        'S': $this.getMilliseconds()
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ($this.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return fmt
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
