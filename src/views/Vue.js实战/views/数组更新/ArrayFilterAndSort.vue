<template>
    <el-col :span="6">
        <el-input clearable placeholder="请输入" v-model="filterText"></el-input>
        <el-select v-model="bankCode" clearable>
            <el-option v-for="item in filterBanks" :key="item.id" :value="item.bankCode"
                       :label="item.bankName"></el-option>
        </el-select>
    </el-col>
</template>

<script>
    export default {
        name: "ArrayFilterAndSort",
        data() {
            return {
                bankCode: '',
                filterText: '',
                param: [
                    {id: 'A10001', bankName: '建设银行', bankCode: '1201'},
                    {id: 'A10002', bankName: '工商银行', bankCode: '1202'},
                    {id: 'A10003', bankName: '农业银行', bankCode: '1203'},
                    {id: 'A10004', bankName: '交通银行', bankCode: '1204'},
                    {id: 'A10005', bankName: '建设银行云龙分行', bankCode: '1301'},
                    {id: 'A10005', bankName: '建设银行泉山分行', bankCode: '1302'},
                    {id: 'A10005', bankName: '建设银行鼓楼分行', bankCode: '1303'},
                    {id: 'A10005', bankName: '建设银行九里分行', bankCode: '13014'},
                ]
            }
        },
        computed: {
            filterBanks() {
                return this.param.filter((bank) => bank.bankName.match(this.filterText));

            }
        }
    }
</script>

<style scoped>

</style>