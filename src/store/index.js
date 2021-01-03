import Vue from 'vue'
import Vuex from 'vuex'
import {
    ADD,
    ADD_N,
    SUB,
    SUB_N,
    ADD_GAME_ATTR,
    SUB_GAME_ATTR,
    UPDATE_GAME_ATTR
} from './mutations-types'
import {UPDATE_GAME_ATTR_ASYNC} from  '@/store/actions-types';

//1.安装插件,底层会执行Vuex.install
Vue.use(Vuex)

//2.创建对象
export default new Vuex.Store({
    state: {//保存状态
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
    },
    mutations: {//同步操作可直接写在此 官方建议将类型抽成常量
        [ADD](state) {//默认有一个参数 state
            state.count++;
        },
        [ADD_N](state, num) {
            state.count += num;
        },
        [SUB](state) {
            state.count--;
        },
        [SUB_N](state, num) {
            state.count -= num;
        },
        [ADD_GAME_ATTR](state) {
            //state.game['price'] = 100;//这样给对象添加属性不是响应式的，
            Vue.set(state.game, 'price', 100);//这样才是响应式的
        },
        [SUB_GAME_ATTR](state) {
            //delete state.game.size;//删除对象的属性，但是这样不是响应式的
            Vue.delete(state.game, 'size')//这样才是响应式的
        },
        updateGame(state,param){
            state.game.name=param;
        }
    },
    actions: {//异步操作在次执行
        updateGameAsync(context,step){
            return new Promise((resolve, reject) => {
                setTimeout(() =>{
                    context.commit('updateGame',step);//当执行成功后调用resolve()
                    resolve('提交成功！');
                },1000)
            })
        },
        addAsync(context) {//context 上下文
            setTimeout(() => {
                context.commit('add')
            }, 1000)
        },
        addNAsync(context, step) {
            setTimeout(() => {
                context.commit('addN', step)
            }, 1000)
        },
        subAsync(context) {
            setTimeout(() => {
                context.commit('sub')
            }, 1000)
        },
        subNAsync(context, step) {
            setTimeout(() => {
                context.commit('subN', step)
            }, 1000)
        }
    },
    modules: {},
    getters: {//类似计算属性
        showNum: state => '当前最新的数量[' + state.count + ']',
        countPerson: state => state.person.length,
        moreAge(state) {//返回一个函数，此函数来过滤
            return (age) => {
                return state.person.filter(node => node.age >= age);
            }
        }
    }
})
