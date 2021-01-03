import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import uploader from 'vue-simple-uploader'
//基础设置
import '@/utils/constant';
//工具方法
import '@/utils/util';
//import Add from './components/Add'  定义全局组件
//Vue.component('my-add',Add)
//产品构建提示信息 发布的时候可以改成true
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(uploader)
new Vue({
  router,//Vue.prototype.$router = router
  store,//Vue.prototype.$store = store
  render: h => h(App)
}).$mount('#app')
