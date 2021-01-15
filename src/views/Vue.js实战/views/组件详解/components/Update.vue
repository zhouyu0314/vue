<template>
    <div>
        <h2>{{updateMsg}}</h2>
        <el-button @click="subUpdateBtn" type="primary" size="mini">子组件修改Msg</el-button>
    </div>
</template>

<script>
    export default {
        name: "Update",
        props:{
            updateMsg:{
                type:String,
                default:()=> null
            }
        },
        methods:{
            subUpdateBtn(){
                this.updateMsg = 'h3';
                this.$emit('update:updateMsg',this.updateMsg);//update:updateMsg名字是预先约定好的不可随便更改
            }
        }
    }
</script>

<style scoped>

</style>