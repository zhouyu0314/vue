import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Counter from '../views/Counter'
import VueSimpleUpload from "../views/VueSimpleUpload";
import WebSocket from "../views/WebSocket";
import Bus from "../views/bus/Bus";
import SlotDemo from "../views/slot/SlotDemo";
import Vuejs from "../views/Vue.js实战/views/Vuejs";
import Computed from "../views/Vue.js实战/views/computed/Computed";
import ArrayUpdate from "../views/Vue.js实战/views/数组更新/ArrayUpdate";
import ArrayFilterAndSort from "../views/Vue.js实战/views/数组更新/ArrayFilterAndSort";
import Event from "../views/Vue.js实战/views/$event/Event";
import Components from "../views/Vue.js实战/views/组件详解/Components";
import NextTick from "../views/Vue.js实战/views/$nextTick/NextTick";
import Rander from "../views/Vue.js实战/views/rander/Rander";
import Query from "../views/Vue.js实战/views/vueRouter/components/Query";

const Router = () => import("../views/Vue.js实战/views/vueRouter/Router");//路由懒加载
const SubA = () => import("../views/Vue.js实战/views/vueRouter/components/SubA");//路由懒加载
const SubB = () => import("../views/Vue.js实战/views/vueRouter/components/SubB");//路由懒加载
const User = () => import("../views/Vue.js实战/views/vueRouter/components/User");//路由懒加载
const query = () => import("../views/Vue.js实战/views/vueRouter/components/Query");//路由懒加载


//路由嵌套
const RouterNews = () => import("../views/Vue.js实战/views/vueRouter/components/RouterNews");//路由懒加载
const RouterMessage = () => import("../views/Vue.js实战/views/vueRouter/components/RouterMessage");//路由懒加载
const vuex = () => import("../views/Vue.js实战/views/vuex/Vuex");//路由懒加载
const Axios = ()=> import('@/views/Vue.js实战/views/axios/Axios')


Vue.use(VueRouter)
const routes = [
    {path: '/', component: Index},
    {path: '/counter', component: Counter},
    {path: '/vueSimpleUpload', component: VueSimpleUpload},
    {path: '/webSocket', component: WebSocket},
    {path: '/bus', component: Bus},
    {path: '/slotDemo', component: SlotDemo},
    {path: '/vuejs', component: Vuejs},
    {path: '/computed', component: Computed},
    {path: '/arrayUpdate', component: ArrayUpdate},
    {path: '/arrayFilterAndSort', component: ArrayFilterAndSort},
    {path: '/event', component: Event},
    {path: '/components', component: Components},
    {path: '/nextTick', component: NextTick},
    {path: '/rander', component: Rander},
    {
        path: '/router',
        component: Router,
        children: [//嵌套路由
            {path: '', redirect: 'news'},//子路径不要加/
            {path: 'news', component: RouterNews},//子路径不要加/
            {path: 'message', component: RouterMessage}//子路径不要加/
        ]
    },
    {
        path: '/router/subA', component:
        SubA, meta: {
            title: '子组件A'
        }, beforeEnter: (to, from, next) => {
            //console.log('路由独享的守卫');
            next();
        }
    },
    {
        path: '/router/subB', component: SubB, meta: {
            title: '子组件B'
        }
    },
    {path: '/router/User/:userId', component: User},//动态路由
    {path: '/query', component: Query},//动态路由
    {path: '/vuex', component: vuex},//动态路由
    {path: '/axios', component: Axios},//动态路由

]

const router = new VueRouter({
    routes,
    mode: 'history'//默认是hash模式，可修改为history模式
})
//导航守卫 前置守卫(guard) ---全局
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;//改变标题
    //console.log('------前置守卫-----');
    next();//此方法保证可以跳转路由
})

//后置钩子(hook) ---全局
router.afterEach((to, from) => {
    //console.log('------后置钩子-----');
})

export default router
