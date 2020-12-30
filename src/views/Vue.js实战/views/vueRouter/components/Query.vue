<template>
    <div>
        <h2>姓名：{{$route.query.name}}</h2>
        <h2>年龄：{{$route.query.age}}</h2>
        <h2>身高：{{$route.query.height}}</h2>

        <el-button size="mini" type="primary" @click="toOptions">$Options</el-button>
    </div>
</template>

<script>
    export default {
        name: "Query",
        methods:{
            toOptions(){
                console.log(this.$options);
            }
        }
    }
</script>

<style scoped>

</style>