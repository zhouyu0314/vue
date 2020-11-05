<template>
    <div>
        <h1 style="text-align: center">this is my index</h1>
        <button @click="toCounter">跳转到计数器</button>
        <button @click="toTask">跳转到task</button>
        <button @click="toEui">跳转到select</button>
        <button @click="toCascade">跳转到cascade</button>
        <button @click="toSwitch">跳转到switch</button>
        <button @click="toSlider">跳转到slider</button>
        <button @click="toTimePicker">跳转到timePicker</button>
        <button @click="toDatePicker">跳转到datePicker</button>
        <button @click="toUpload">跳转到upload</button>
        <button @click="toTransfer">跳转到transfer</button>
        <button @click="toForm">跳转到form</button>
        <button @click="toTable">跳转到table</button>
        <button @click="toTable1">跳转到table1</button>
        <button @click="toTableSort">跳转到tableSort</button>
        <button @click="toTableFilters">跳转到tableFilters</button>
        <button @click="toTag">跳转到tag</button>
        <button @click="toPage">跳转到page</button>
        <button @click="toBadge">跳转到badge</button>
        <button @click="toAlert">跳转到alert</button>
        <button @click="toLoading">跳转到Loading</button>
        <button @click="toMessage">跳转到Message</button>
        <button @click="toMessageBox">跳转到messageBox</button>
        <button @click="toMenu">跳转到menu</button>
        <button @click="toTree">跳转到tree</button>
        <button @click="toRenderDemo">跳转到renderDemo</button>
        <button @click="toTest">跳转到Test</button>
        <el-divider></el-divider>
        <el-button type="primary" @click="toVueSimpleUpload">跳转到VueSimpleUpload</el-button>
        <el-button type="primary" @click="toFilterDemo">跳转到FilterDemo</el-button>
        <el-button type="primary" @click="toHandleJSON">跳转到HandleJSON</el-button>
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
            toTask() {
                this.$router.push("task")
            },
            toEui() {
                this.$router.push("eui")
            },
            toCascade() {
                this.$router.push("cascade")
            },
            toSwitch() {
                this.$router.push("switch")
            },
            toSlider() {
                this.$router.push("slider")
            },
            toTimePicker() {
                this.$router.push("timePicker")
            },
            toDatePicker() {
                this.$router.push("datePicker")
            },
            toUpload() {
                this.$router.push("upload")
            },
            toTransfer() {
                this.$router.push("transfer")
            },
            toForm() {
                this.$router.push("form")
            },
            toTable() {
                this.$router.push("table")
            },
            toTable1() {
                this.$router.push("table1")
            },
            toTableSort() {
                this.$router.push("tableSort")
            },
            toTableFilters() {
                this.$router.push("tableFilters")
            },
            toTag() {
                this.$router.push("tag")
            },
            toPage() {
                this.$router.push("page")
            },
            toBadge() {
                this.$router.push("badge")
            },
            toAlert() {
                this.$router.push("alert")
            },
            toLoading() {
                this.$router.push("loading")
            },
            toMessage() {
                this.$router.push("message")
            },
            toMessageBox() {
                this.$router.push("messageBox")
            },
            toMenu() {
                this.$router.push("menu")
            },
            toTree() {
                this.$router.push("tree")
            }, toRenderDemo() {
                this.$router.push("renderDemo")
            },
            toTest() {
                this.$router.push("test")
            },
            toVueSimpleUpload() {
                this.$router.push("vueSimpleUpload")
            },
            toFilterDemo() {
                this.$router.push("filterDemo")
            },
            toHandleJSON() {
                this.$router.push("handleJSON")
            }
        }
    }
</script>

<style scoped>

</style>
