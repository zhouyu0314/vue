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
    import {mapMutations,mapActions} from "vuex"
    export default {
        name: "SubNum",
        data(){
            return {
                name:'我是sub子组件'
            }
        },
        methods:{
            ...mapMutations(['sub','subN']),
            ...mapActions(['subAsync','subNAsync']),
            handle_sub(){
                this.sub();
            },
            handle_subN(){
               this.subN(3);
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
