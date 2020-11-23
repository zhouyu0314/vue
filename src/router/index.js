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
    {path: '/*', component: NotFound}

]

const router = new VueRouter({
  routes
})

export default router
