import Vue from 'vue';

export default {//同步操作可直接写在此 官方建议将类型抽成常量
    add(state) {//默认有一个参数 state
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
    },
    addGameAttr(state) {
        //state.game['price'] = 100;//这样给对象添加属性不是响应式的，
        Vue.set(state.game, 'price', 100);//这样才是响应式的
    },
    subGameAttr(state) {
        //delete state.game.size;//删除对象的属性，但是这样不是响应式的
        Vue.delete(state.game, 'size')//这样才是响应式的
    },
    updateGame(state,param){
        state.game.name=param;
    }
}