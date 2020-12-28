<template>
    <div>
        <el-button v-for="(item,index) in array" :key="index" type="success" size="mini">{{item.name}}</el-button>

        <el-divider content-position="left">数组的操作</el-divider>
        <el-button type="success" size="mini" @click="push">push()</el-button>
        <el-button type="success" size="mini" @click="pop">pop()</el-button>
        <el-button type="success" size="mini" @click="shift">shift()</el-button>
        <el-button type="success" size="mini" @click="unshift">unshift()</el-button>
        <el-button type="success" size="mini" @click="splice">splice()</el-button>
        <el-button type="success" size="mini" @click="sort">sort()</el-button>
        <el-button type="success" size="mini" @click="reverse">reverse()</el-button>
    </div>
</template>

<script>
    export default {
        name: "ArrayUpdate",
        data() {
            return {
                array: [
                    {name: '按钮1'}, {name: '按钮2'}, {name: '按钮3'}, {name: '按钮4'}]

            }
        },
        methods: {
            push() {
                this.array.push({name:'push按钮'});
            },
            pop() {//弹出栈顶数据({name: '按钮4'})
                this.array.pop();
            },
            shift() {//弹出栈底数据({name: '按钮1'})
                this.array.shift();
            },
            unshift() {//unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
                this.array.unshift({name: 'unshift按钮'});
            },
            splice() {//从index为0的元素开始删除1个元素，第三个是可选值,如果有则是删除一个元素后，在此位置添加指定的元素
                this.array.splice(0,1, {name: 'splice按钮'});
            },
            sort() {

            },
            reverse() {

            }
        }
    }
</script>

<style scoped>

</style>