<template>
    <div>
        <el-divider content-position="left">{{name}}</el-divider>
        <el-button type="primary" size="mini" @click="handle_add">+</el-button>
        <el-button type="primary" size="mini" @click="handle_addN">+N</el-button>
        <el-button type="primary" size="mini" @click="async_add">延迟+1</el-button>
        <el-button type="primary" size="mini" @click="async_addN">延迟+N</el-button>
    </div>
</template>

<script>
    import {mapMutations, mapActions} from "vuex"

    export default {
        name: "AddNum",
        data() {
            return {
                name: '我是Add子组件'
            }
        },
        methods: {
            ...mapMutations(['add', 'addN']),
            ...mapActions(['addAsync', 'addNAsync']),
            handle_add() {
                this.add();
            },
            handle_addN() {
                this.addN(3);
            },
            async_add() {
                this.addAsync();
            },
            async_addN() {
                this.addNAsync(3);
            },
        },
    }
</script>

<style scoped>

</style>
