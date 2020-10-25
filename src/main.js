import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import uploader from 'vue-simple-uploader'
//import Add from './components/Add'  定义全局组件
//Vue.component('my-add',Add)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(uploader)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
