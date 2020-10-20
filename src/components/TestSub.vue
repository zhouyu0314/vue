<template>
    <div>
        <div v-for="(item,index) in arr" :key="index">
            <span>{{item.name}}</span><span>{{item.age}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TestSub",
        data(){
            return{
                arr:[{name:'张三',age:10},
                    {name:'李四',age:11},
                    {name:'王五',age:12},
                    {name:'赵六',age:13}]
            }
        },
        methods:{
            btn(){
                this.arr.push({name:'田七',age:14})
            }
        }
    }
</script>

<style scoped>

</style>