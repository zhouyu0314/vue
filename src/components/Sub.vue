<template>
    <div>
        <button @click="handle_sub">-</button>
        <button @click="handle_subN">-N</button>
        <button @click="async_sub">延迟-1</button>
        <button @click="async_subN">延迟-N</button>
    </div>
</template>

<script>
    import {mapMutations,mapActions} from "vuex"
    export default {
        name: "Sub",
        data(){
            return {
                name:'我是sub子组件'
            }
        },
        methods:{
            ...mapMutations(['sub','subN']),
            ...mapActions(['subAsync','subNAsync']),
            showsub(){
                this.$message({
                    message:'父组件调用子组件方法',
                    type:'success'
                })
            },
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
