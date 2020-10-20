<template>
    <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
        </el-date-picker>

        <hr>

        <span class="demonstration">带快捷选项</span>
        <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
        </el-date-picker>

        <hr>
        <span>选择日期范围</span>
        <hr>
        <span class="demonstration">默认</span><br>
        <el-date-picker
                v-model="value3"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: "DatePicker",
        data() {
            return {
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                value1: '',
                value2: '',
                value3: ''
            };
        },
        methods:{

        },
        watch:{
            value3(){
                console.log(`日期范围：${this.value3}`)
            }
        }
    }
</script>

<style scoped>

</style>