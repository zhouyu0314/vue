<template>
    <div>
        <h2>vuex的变量：{{this.$store.state.count}}</h2>
        <add-num></add-num>
        <sub-num></sub-num>
        <el-divider content-position="left">vuex</el-divider>
        <h4>人员：{{person}}</h4>
        <h4>数量：{{countPerson}}</h4>
        <el-divider content-position="left">过滤人员</el-divider>
        <h4>人员：{{moreAge(30)}}</h4>
        <el-divider content-position="left">动态增删对象属性(响应式)</el-divider>
        <h4>游戏：{{game}}</h4>
        <el-button size="mini" type="success" @click="addGame">+</el-button>
        <el-button size="mini" type="success" @click="subGame">-</el-button>
        <el-button size="mini" type="success" @click="updateGame">update</el-button>

        <el-divider content-position="left">moudle</el-divider>
        <h4>name：{{this.$store.state.a.name}}</h4>
        <h4>getters：{{this.$store.getters.moudleAPlus}}</h4>
        <el-button size="mini" type="success" @click="updateA">修改moudleA里的name</el-button>
    </div>
</template>

<script>
    import AddNum from "./components/AddNum";
    import SubNum from "./components/SubNum";
    import {mapState, mapGetters,mapMutations,mapActions} from "vuex";
    export default {
        name: "Vuex",
        components: {
            'add-num': AddNum, 'sub-num': SubNum
        },
        computed:{
            ...mapState(['person','game']),
            ...mapGetters(['countPerson','moreAge'])
        },methods:{
            ...mapMutations(['addGameAttr','subGameAttr']),
            ...mapActions(['subAsync','subNAsync','updateGameAsync']),
            addGame(){
                this.addGameAttr();
            },
            subGame(){
                this.subGameAttr();
            },
            updateGame(){
                let param = 'DOTA';
                this.updateGameAsync(param).then(res =>{
                    console.log(res);
                })
                //this.updateGameAsync(param);
            },
            updateA(){
                this.$store.commit('updateMoudleAName','李四');
            }
        }
    }
</script>

<style scoped>

</style>