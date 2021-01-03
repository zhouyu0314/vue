import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Counter from '../views/Counter'
import NotFound from '../views/404'
import Eui from '../views/Eui'
import Cascade from '../views/Cascader'
import Switch from '../views/Switch'
import Slider from '../views/Slider'
import TimePicker from '../views/TimePicker'
import DatePicker from '../views/DatePicker'
import Upload from '../views/Upload'
import Transfer from '../views/Transfer'
import Form from '../views/Form'
import Table from '../views/Table'
import Table1 from '../views/Table1'
import TableSort from '../views/Table-sort'
import TableFilters from '../views/Table-filters'
import Tag from '../views/Tag'
import Page from '../views/Page'
import Badge from '../views/Badge'
import Alert from '../views/Alert'
import Loading from '../views/Loading'
import Message from "../views/Message";
import MessageBox from "../views/MessageBox";
import Tree from "../views/Tree";
import Menu from "../views/Menu";
import RenderDemo from "../views/RenderDemo";
import Test from "../views/Test";
import VueSimpleUpload from "../views/VueSimpleUpload";
import FilterDemo from "../views/FilterDemo";
import HandleJSON from "../views/HandleJSON";
import WebSocket from "../views/WebSocket";
import KSTB_BusinessCommit from "../views/KSTB_BusinessCommit";
import Bus from "../views/bus/Bus";
import SlotDemo from "../views/slot/SlotDemo";
import PromiseDemo from "../views/Promise/PromiseDemo";
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
const TabBarIndex = () => import("../views/tabbar/TabBarIndex");//路由懒加载


//路由嵌套
const RouterNews = () => import("../views/Vue.js实战/views/vueRouter/components/RouterNews");//路由懒加载
const RouterMessage = () => import("../views/Vue.js实战/views/vueRouter/components/RouterMessage");//路由懒加载
const vuex = () => import("../views/Vue.js实战/views/vuex/Vuex");//路由懒加载


Vue.use(VueRouter)
const routes = [
    {path: '/', component: Index},
    {path: '/counter', component: Counter},
    {path: '/eui', component: Eui},
    {path: '/cascade', component: Cascade},
    {path: '/switch', component: Switch},
    {path: '/slider', component: Slider},
    {path: '/timePicker', component: TimePicker},
    {path: '/datePicker', component: DatePicker},
    {path: '/upload', component: Upload},
    {path: '/transfer', component: Transfer},
    {path: '/form', component: Form},
    {path: '/table', component: Table},
    {path: '/table1', component: Table1},
    {path: '/tableSort', component: TableSort},
    {path: '/tableFilters', component: TableFilters},
    {path: '/tag', component: Tag},
    {path: '/page', component: Page},
    {path: '/badge', component: Badge},
    {path: '/alert', component: Alert},
    {path: '/loading', component: Loading},
    {path: '/message', component: Message},
    {path: '/messageBox', component: MessageBox},
    {path: '/menu', component: Menu},
    {path: '/tree', component: Tree},
    {path: '/renderDemo', component: RenderDemo},
    {path: '/test', component: Test},
    {path: '/vueSimpleUpload', component: VueSimpleUpload},
    {path: '/filterDemo', component: FilterDemo},
    {path: '/handleJSON', component: HandleJSON},
    {path: '/webSocket', component: WebSocket},
    {path: '/kstb', component: KSTB_BusinessCommit},
    {path: '/bus', component: Bus},
    {path: '/slotDemo', component: SlotDemo},
    {path: '/promiseDemo', component: PromiseDemo},
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
    {path: '/tabBarIndex', component: TabBarIndex},//动态路由
    {path: '/vuex', component: vuex},//动态路由
    {path: '/*', component: NotFound}

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
