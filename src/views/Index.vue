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
        <el-button type="primary" @click="toNetty" style="margin-top: 10px">跳转到Netty</el-button>
        <el-button type="primary" @click="toTest" style="margin-top: 10px">跳转到Test</el-button>
<el-input v-model="userId" size="mini"></el-input>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                userId:'',
            }
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
            toNetty(){
                this.$router.push({
                    path:'/netty',
                    query:{
                        userId:this.userId
                    }
                })
            },
          toTest(){
            this.$router.push("test01")
          }


        }
    }
</script>

<style scoped>

</style>
