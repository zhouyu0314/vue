<template>
    <div>

        <sub-a></sub-a>
        <br>
        <sub-b></sub-b>


        <el-form :model="param">
            <el-form-item label="单选">
                <el-radio-group v-model="param.radio">
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                    <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item>
                <el-button @click="submit">提交</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    import SubA from "./components/SubA";
    import SubB from "./components/SubB";

    export default {
        name: "Bus",
        components: {
            'sub-a': SubA, 'sub-b': SubB
        },
        data(){
            return{
                param:{
                    radio:3,
                }
            }
        },
        methods:{
            submit(){
                console.log(this.param);
            }
        }
    }
</script>

<style scoped>

</style>