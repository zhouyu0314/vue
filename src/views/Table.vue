<template>
    <div>
        <el-table :data="tableData" style="width:100%" stripe border :row-class-name="tableRowClassName" max-height="250"  size="mini" highlight-current-row
                  :default-sort="{prop: 'date', order: 'ascending'}" class="el-table">
            <el-table-column type="selection"></el-table-column>
            <el-table-column label="日期" prop="date" width="180"></el-table-column>
            <el-table-column label="姓名" prop="name" width="180"></el-table-column>
            <el-table-column label="地址" prop="address"></el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                    <el-button @click="add(scope.$index, scope.row)" type="primary">添加</el-button>
                    <el-button @click="del(scope.$index, scope.row)" type="warning">删除</el-button>
               </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "Table",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1520 弄'
                }]
            }
        },
        methods:{
            add(index, row){
            },
            del(index, row){

            },
            tableRowClassName({row, rowIndex}){
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        }
    }
</script>

<style>

</style>