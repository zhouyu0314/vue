<template>
    <div>
        <el-select v-model="value" placeholder="请选择" :disabled="disabled" clearable filterable >
            <el-option v-for="item in options" :key="item.value"
                       :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>

        <h4>多选</h4>
        <hr>
        <el-select v-model="valueMuilt1" multiple placeholder="请选择" collapse-tags>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>

        <el-select v-model="valueMuilt2" multiple placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>

        <h4>自定义模板</h4>
        <hr>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
        </el-select>
        <h4>分组</h4>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "Eui",
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面',
                    disabled:true
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                cities: [{
                    value: 'Beijing',
                    label: '北京'
                }, {
                    value: 'Shanghai',
                    label: '上海'
                }, {
                    value: 'Nanjing',
                    label: '南京'
                }, {
                    value: 'Chengdu',
                    label: '成都'
                }, {
                    value: 'Shenzhen',
                    label: '深圳'
                }, {
                    value: 'Guangzhou',
                    label: '广州'
                }],
                value: '',
                valueMuilt1:'',
                valueMuilt2:'',
                disabled:false
            }
        },
        methods:{

        },watch:{
            valueMuilt1(){
                console.log(`valueMuilt1:${this.valueMuilt1}`)
            },
            valueMuilt2(){
                console.log(`valueMuilt2:${this.valueMuilt2}`)
            }
        }
    }
</script>

<style scoped>

</style>
