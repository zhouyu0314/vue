<template>
    <div>
        <el-button size="mini" type="primary" @click="toComputed" class="vuejs">计算属性</el-button>
        <el-button size="mini" type="primary" @click="toArrayUpdate" class="vuejs">数组更新</el-button>
        <el-button size="mini" type="primary" @click="toArrayFilterAndSort" class="vuejs">通过计算属性过滤数组和排序</el-button>
        <el-button size="mini" type="primary" @click="toEvent" class="vuejs">vue的$event</el-button>
        <el-button size="mini" type="primary" @click="toComponents" class="vuejs">vue的components</el-button>
        <el-button size="mini" type="primary" @click="toNextTick" class="vuejs">vue的NextTick</el-button>
        <el-button size="mini" type="primary" @click="toRander" class="vuejs">Rander</el-button>
        <el-button size="mini" type="primary" @click="toRouter" class="vuejs">跳转到Router</el-button>
        <el-button size="mini" type="primary" @click="toVuex" class="vuejs">跳转到Vuex</el-button>
        <el-button size="mini" type="primary" @click="toAxios" class="vuejs">跳转到axios</el-button>

    </div>
</template>

<script>
    export default {
        name: "Vuejs",
        methods: {
            toComputed() {
                this.$router.push("computed")
            },
            toArrayUpdate() {
                this.$router.push("arrayUpdate")
            },
            toArrayFilterAndSort() {
                this.$router.push("arrayFilterAndSort");
            },
            toEvent() {
                this.$router.push("event");
            },
            toComponents() {
                this.$router.push("components");
            },
            toNextTick() {
                this.$router.push("nextTick");
            },
            toRander() {
                this.$router.push("rander");
            },
            toRouter() {
                this.$router.push("router")
            },
            toVuex(){
                this.$router.push("vuex")
            },
            toAxios(){
                this.$router.push("axios")
            }
        }
    }
</script>

<style scoped>
    .vuejs {
        margin-top: 10px;
    }

</style>