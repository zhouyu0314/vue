<template>
    <div>
        <el-input size="mini" placeholder="请输入关键字过滤" prefix-icon="el-icon-search" style="width: 50%"
                  v-model="fileFilterText" clearable></el-input>
        <el-table :data="fileList" border stripe style="width: 50%" size="mini">
            <el-table-column prop="id" label="编号"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
        </el-table>
        <el-divider></el-divider>
        <el-button @click="handleFilterFileList" type="primary">测试数组的filter方法</el-button>
        <el-divider></el-divider>
        <el-table :data="filterFileList" border stripe style="width: 50%" size="mini">
            <el-table-column prop="id" label="编号"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "FilterDemo",
        data() {
            return {
                fileList: [
                    {id: 'A10001', name: '张三', age: 18},
                    {id: 'A10002', name: '李四', age: 18},
                    {id: 'A10003', name: '王五', age: 25},
                    {id: 'A10004', name: '赵六', age: 23},
                    {id: 'A10005', name: '田七', age: 38}],
                filterFileList: [],
                fileFilterText: ''
            }
        },
        methods: {
            handleFilterFileList() {
                this.fileList.filter(item => {
                    //判断此子元素有没有这个属性
                    if (item.hasOwnProperty("name")) {
                        //过滤年龄>20岁的
                        if (item.age>20) {
                            this.filterFileList.push(item);
                        }

                    }
                })
            }
        },
        watch: {
            fileFilterText(value) {//此处的value相当于输入的内容
                console.log(value);
            }
        }
    }
</script>

<style scoped>

</style>