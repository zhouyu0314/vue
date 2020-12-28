<template>
    <div>
        <el-col :span="6">
            <el-input clearable size="mini" v-model="input"></el-input>
<!--            &lt;!&ndash;代码冗长&ndash;&gt;-->
<!--            <template v-if="input == 1">-->
<!--                <h1>标签{{input}}</h1>-->
<!--            </template>-->
<!--            <template v-else-if="input == 2">-->
<!--                <h2>标签{{input}}</h2>-->
<!--            </template>-->
<!--            <template v-else-if="input == 3">-->
<!--                <h3>标签{{input}}</h3>-->
<!--            </template>-->
<!--            <template v-else-if="input == 4">-->
<!--                <h4>标签{{input}}</h4>-->
<!--            </template>-->
<!--            <template v-else-if="input == 5">-->
<!--                <h5>标签{{input}}</h5>-->
<!--            </template>-->
<!--            <template  v-else-if="input == 6"><h6>标签{{input}}</h6></template>-->


        </el-col>
    </div>
</template>

<script>
    export default {
        name: "Rander",
        data(){
            return{
                input:'',
            }
        },methods:{

        }
    }
</script>

<style scoped>

</style>