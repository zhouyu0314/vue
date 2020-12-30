<template>
    <div>
        <h2>用户界面</h2>
        <h3>当前用户：{{user}}</h3>
    </div>
</template>

<script>
    export default {
        name: "User",
        computed:{
            user(){
                return this.$route.params.userId;//$route：当前活跃的路由 userId：在路由的js中定义的动态路由的参数名
            }
        }
    }
</script>

<style scoped>

</style>