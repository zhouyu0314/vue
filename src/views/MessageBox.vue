<template>
    <div>
        <el-button type="text" @click="open">点击打开 Message Box</el-button>
        <hr>
        <span>确认消息</span>
        <hr>
        <el-button type="text" @click="open1">点击打开 Message Box</el-button>
        <hr>
        <span>提交内容</span>
        <hr>
        <el-button type="text" @click="open2">点击打开 Message Box</el-button>
    </div>

</template>

<script>
    export default {
        name: "MessageBox",
        methods: {
            open() {
                this.$alert('这是一段内容', '标题名称', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            },
            open1() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
          open2() {
        this.$prompt('请输入邮箱', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
            this.$message({
                type: 'success',
                message: '你的邮箱是: ' + value
            });
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '取消输入'
            });
        });
    }
        }
    }
</script>

<style scoped>

</style>