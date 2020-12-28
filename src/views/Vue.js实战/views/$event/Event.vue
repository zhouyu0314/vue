<template>
    <div>
        <el-button size="mini" type="success" @click="handleEvent('禁止打开',$event)">$event</el-button>
        <el-divider>在上例使用的event.pr巳ventDefault（）也可以用Vue 事件的修饰符来实现，在＠绑定的事件后加小圆点“．”，再跟一个后缀来使用修饰符。</el-divider>
        <el-divider>一些按键修饰符，详情参见Vue.js 46页</el-divider>
        <el-col :span="6">
        <el-input size="mini" @keyup.enter.native="handleBtn" v-model="data"></el-input>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: "Event",
        data(){
            return{
                data:'',
            }
        },methods:{
            handleEvent(msg,event){
                console.log(msg);
                console.log(event);
                event.preventDefault();//取消事件的默认动作。
                this.$message.warning(msg);
            },
            handleBtn(){
                this.$message.success('通过回车键提交！');
            }
        }
    }
</script>

<style scoped>

</style>