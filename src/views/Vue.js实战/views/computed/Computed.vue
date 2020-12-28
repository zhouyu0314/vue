<template>
    <div>
        <h3>{{reversedText}}</h3>
        <el-divider content-position="left">购物车</el-divider>
        <el-row>
            <el-col :span="6">
                <el-form :model="param">
                    <el-form-item label="商品1">
                        <el-input clearable placeholder="请输入价格" v-model="param.c1"></el-input>
                    </el-form-item>
                    <el-form-item label="商品2">
                        <el-input clearable placeholder="请输入价格" v-model="param.c2"></el-input>
                    </el-form-item>
                    <el-form-item label="总价">
                        <el-input v-model="totalPrice" readonly></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-divider content-position="left">姓名</el-divider>
        <h3>{{fullName}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Computed",
        data() {
            return {
                text: '123,456',
                param: {
                    c1: '',
                    c2: '',
                },
                firstName: 'Jack',
                lastName: 'Green',
            }
        },
        computed: {
            reversedText() {//Vue methods和computed中不能使用箭头函数,箭头函数中的 this 会指向 windows 而非 Vue 的实例。
                return this.text.split(',').reverse().join(',');
            },
            totalPrice() {
                return parseInt(this.param.c1) + parseInt(this.param.c2);
            },
            fullName: {
                get: function () {
                    return this.firstName + '' + this.lastName;
                },
                //setter,写入时触发
                set: function (newValue) {
                    var names = newValue.split(' ');
                    this.firstName = names[0];
                    this.lastName = names[names.length - 1];
                }
            }
        }
    }
</script>

<style scoped>

</style>