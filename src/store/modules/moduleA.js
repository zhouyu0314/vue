export default {
    state:{//moudleA 的state会以对象的形式加入到store的state里，对象的名字叫a
        name:'moudleA'
    },
    mutations:{
        updateMoudleAName(state,payload){
            state.name = payload;
        }
    },
    getters:{//在store中getters里的函数只能传两个参数即(state,getters)，而在moudle中定义的getters则可以传三个(tate,getters,rootState)
        moudleAPlus(state,getters,rootState){
            return state.name + rootState.count;
        }
    },
    actions:{//此处的context只代表模块本身。即commit只能提交本模块mutations里面的方法。不能跨模块提交

    }
}