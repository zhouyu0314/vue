<template>
    <div>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
        </el-switch>
        <h4>文字描述</h4>
        <hr>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" active-text="开" inactive-text="关">
        </el-switch>
    </div>
</template>

<script>
    export default {
        name: "Switch",
        data(){
            return {
                value:true
            }
        }
    }
</script>

<style scoped>

</style>