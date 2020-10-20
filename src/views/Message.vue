<template>

    <div>
        <el-button :plain="true" @click="open">打开消息提示</el-button>
        <el-button :plain="true" @click="openVn">VNode</el-button>
    </div>
</template>

<script>
    export default {
        name: "Message",
        methods: {
            open() {
                this.$message({
                    message:'第一条信息',
                    type:'success',
                    showClose:true,
                    duration:5000,
                    center: true
                });
            },
            openVn() {
                const h = this.$createElement;
                this.$message({
                    message: h('p', null, [
                        h('span', null, '内容可以是 '),
                        h('i', {style: 'color: teal'}, 'VNode')
                    ])
                });
            }
        }
    }
</script>

<style scoped>

</style>