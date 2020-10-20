import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count++;
        },
        addN(state, num) {
            state.count += num;
        },
        sub(state) {
            state.count--;
        },
        subN(state, num) {
            state.count -= num;
        }
    },
    actions: {
        addAsync(context){
            setTimeout(()=>{
                context.commit('add')
            },1000)
        },
        addNAsync(context,step){
            setTimeout(()=>{
                context.commit('addN',step)
            },1000)
        },
        subAsync(context){
            setTimeout(()=>{
                context.commit('sub')
            },1000)
        },
        subNAsync(context,step){
            setTimeout(()=>{
                context.commit('subN',step)
            },1000)
        }
    },
    modules: {},
    getters:{
        // showNum(state){
        //     return '当前最新的数量['+state.count+']';
        // }
        showNum: state =>  '当前最新的数量['+state.count+']'

    }
})
