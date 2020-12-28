<template>
    <div>
        <h1>{{number}}</h1>
        <el-button type="success" size="mini" @click="add">+1</el-button>
        <el-button type="success" size="mini" @click="sub">+1</el-button>
    </div>
</template>

<script>
    export default {
        name: "Add",
        props:['number'],
        methods:{
            add(){
                this.number++;
                this.$emit('addNum',this.number)
            },sub(){
                this.number--;
                this.$emit('addNum',this.number)
            }
        }
    }
</script>

<style scoped>

</style>