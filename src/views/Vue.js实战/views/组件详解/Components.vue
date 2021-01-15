<template>
    <div>
        <add :number="number" @addNum="addNumListen" @click.native="handleAdd"></add>
        <el-divider></el-divider>
        <!--:updateMsg.sync 子组件修改此数组可通过emit同步到父组件-->
        <update :updateMsg.sync="updateMsg"></update>
        <el-button @click="updateBtn" type="primary" size="mini">打印updateMsg</el-button>
    </div>
</template>

<script>
    import Add from "./components/Add";
    import Update from "./components/Update";

    export default {
        name: "Components",
        components: {
            'add': Add,
            'update':Update
        }, data() {
            return {
                number:0,
                updateMsg:'h2'
            }
        },methods:{
            addNumListen(item){
                this.number = item;
            },
            handleAdd(){//监听的是该组件的根元素
                this.$message.success('监听一个原生事件');
            },
            updateBtn(){
            this.$message.success(this.updateMsg)    ;
            }
        }
    }
</script>

<style scoped>

</style>