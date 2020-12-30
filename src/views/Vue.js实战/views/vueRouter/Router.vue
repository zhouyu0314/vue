<template>
    <div>
        <el-button size="mini" type="success" @click="toSubA">组件A</el-button>
        <el-button size="mini" type="success" @click="toSubB">组件B</el-button>
        <el-button size="mini" type="success" @click="toUser">用户</el-button>
        <el-button size="mini" type="success" @click="toQuery">query传参</el-button>
        <el-divider content-position="left">路由嵌套</el-divider>
        <el-button size="mini" type="success" @click="toNews">新闻</el-button>
        <el-button size="mini" type="success" @click="toMessage">消息</el-button>
        <el-divider content-position="left">路由嵌套内容</el-divider>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Router",
        methods: {
            toSubA() {
            this.$router.push('/router/subA');

            },
            toSubB() {
                this.$router.push('/router/subB');
            },
            toUser(){
                this.$router.push('/router/user/李四');//http://localhost:8080/router/user/zhangsan 参数是动态的
            },
            toNews(){
                this.$router.push('/router/news');
            },
            toMessage(){
                this.$router.push('/router/message');
            },
            toQuery(){
                let param = {
                    name:'张三',
                    age:20,
                    height:1.88
                }
                this.$router.push({path:'/query',query:param});
            }
        }
    }
</script>

<style scoped>

</style>