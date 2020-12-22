<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input size="mini" clearable placeholder="子组件A" v-model="subAData"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button size="mini" type="success" @click="ToSubB">子组件A</el-button>
            </el-col>
            <el-col :span="2">
                <el-button size="mini" type="success" @click="ToSubB1">不传参，只触发方法</el-button>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import bus from "../api/bus";
    export default {
        name: "SubA",
        data() {
            return {
                subAData: '',
            }
        },
        methods: {
            ToSubB() {
                //通过事件中心去发射'Assembly'自己命名的，方法，this.elementValue为传的参数。
                bus.$emit('subAData', this.subAData);
            },
            ToSubB1(){
                bus.$emit('subAData1');
            }
        }
    }
</script>

<style scoped>

</style>