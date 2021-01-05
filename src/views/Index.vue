<template>
    <div >
        <h1 style="text-align: center">this is my index</h1>
        <button @click="toCounter">跳转到计数器</button>
        <el-divider></el-divider>
        <el-button type="primary" @click="toVueSimpleUpload" style="margin-top: 10px">跳转到VueSimpleUpload</el-button>
        <el-button type="primary" @click="toWebSocket" style="margin-top: 10px">跳转到WebSocket</el-button>
        <el-button type="primary" @click="toBus" style="margin-top: 10px">跳转到BUS</el-button>
        <el-button type="primary" @click="toSlotDemo" style="margin-top: 10px">跳转到SlotDemo</el-button>
        <el-button type="primary" @click="toVuejs" style="margin-top: 10px">跳转到Vuejs</el-button>

    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {}
        },
        methods: {
            toCounter() {
                this.$router.push("Counter")
            },
            toVueSimpleUpload() {
                this.$router.push("vueSimpleUpload")
            },
            toWebSocket() {
                this.$router.push("webSocket")
            },
            toBus(){
                this.$router.push("bus")
            },
            toSlotDemo(){
                this.$router.push("slotDemo")
            },
            toVuejs(){
                this.$router.push("vuejs")
            },


        }
    }
</script>

<style scoped>

</style>
