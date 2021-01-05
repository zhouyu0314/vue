export default {//异步操作在次执行
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
}