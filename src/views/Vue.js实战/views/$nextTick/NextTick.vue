<template>
    <div>
        <el-divider content-position="left">获取div内容</el-divider>
        <el-button type="primary" size="mini" @click="handleGetDiv">获取div内容</el-button>
        <div v-if="flag"  id="handleGetDiv">获取div内容</div>
    </div>
</template>

<script>
    export default {
        name: "NextTick",
        data() {
            return {
                flag: false,
            }
        },methods:{
            handleGetDiv(){//虚拟dom重建 需要使用$nextTick 才能再重建好之后获取值
                this.flag = true;
                this.$nextTick(()=>{
                    let innerHTML = document.getElementById("handleGetDiv").innerHTML;
                    console.log(innerHTML);
                })

            }
        }
    }
</script>

<style scoped>

</style>