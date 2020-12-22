<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input size="mini" clearable placeholder="子组件B"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button size="mini" type="primary">子组件B</el-button>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import bus from "../api/bus";

    export default {
        name: "SubB",
        mounted() {
            // 用$on事件来接收参数   并且调用了在a组件中出发的方法
            bus.$on('subAData', (data) => {
                console.log(data)
            });
            bus.$on('subAData1', () => {
               this.test();
            })
        },
        data() {
            return {}
        },
        methods: {
            test(){
                console.log("SubB触发事件");
            }
        }
    }
</script>

<style scoped>

</style>