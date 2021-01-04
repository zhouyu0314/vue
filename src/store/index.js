import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import moduleA from "./modules/moduleA";
//1.安装插件,底层会执行Vuex.install
Vue.use(Vuex)

const state = {//保存状态
    count: 0,
    person: [
        {name: '张三', age: 20},
        {name: '李四', age: 10},
        {name: '王五', age: 25},
        {name: '赵六', age: 40}
    ],
    game: {
        name: '三国杀', size: '100MB'
    }
};
//2.创建对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a:moduleA
    },
})

