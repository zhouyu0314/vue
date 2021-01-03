<template>
    <div>
        <el-divider content-position="left">{{name}}</el-divider>
        <el-button type="primary" size="mini" @click="handle_sub">-</el-button>
        <el-button type="primary" size="mini" @click="handle_subN">-N</el-button>
        <el-button type="primary" size="mini" @click="async_sub">延迟-1</el-button>
        <el-button type="primary" size="mini" @click="async_subN">延迟-N</el-button>
    </div>
</template>

<script>
    import {
        ADD,
        ADD_N,
        SUB,
        SUB_N,
        ADD_GAME_ATTR,
        SUB_GAME_ATTR
    } from '@/store/mutations-types'
    import {mapMutations,mapActions} from "vuex"
    export default {
        name: "SubNum",
        data(){
            return {
                name:'我是sub子组件'
            }
        },
        methods:{
            ...mapMutations([SUB,SUB_N]),
            ...mapActions(['subAsync','subNAsync']),
            handle_sub(){
                SUB;
            },
            handle_subN(){
                [SUB_N](3);
            },
            async_sub(){
                this.subAsync();
            },
            async_subN(){
                this.subNAsync(3);
            }
        }
    }
</script>

<style scoped>

</style>
