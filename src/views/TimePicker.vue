<template>
    <div>
        <el-time-select v-model="value"
                        :picker-options="{start: '08:00',end: '18:00',step:'00:30'}" placeholder="请选择时间">
        </el-time-select>
        <hr>
        <h4>选择任意时间点</h4>
        <el-time-picker v-model="value1" :picker-options="{
        selectableRange: '08:00 - 18:00'
        }" placeholder="请选择时间">
        </el-time-picker>

    </div>
</template>

<script>
    export default {
        name: "TimePicker",
        data(){
            return {
                value: '',
                value1: new Date(2016, 9, 10, 18, 40)
            }
        },watch:{
            value(){
                if(this.value != null){
                    console.log(`选择的时间：${this.value}`)
                }
            },
            value1(){
                if(this.value1 != null){
                    console.log(`选择的时间：${this.value1}`)
                }
            }
        }
    }
</script>

<style scoped>

</style>