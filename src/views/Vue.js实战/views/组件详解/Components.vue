<template>
    <div>
        <add :number="number" @addNum="addNumListen" @click.native="handleAdd"></add>
    </div>
</template>

<script>
    import Add from "./components/Add";

    export default {
        name: "Components",
        components: {
            'add': Add
        }, data() {
            return {
                number:0,
            }
        },methods:{
            addNumListen(item){
                this.number = item;
            },
            handleAdd(){//监听的是该组件的根元素
                this.$message.success('监听一个原生事件');
            }
        }
    }
</script>

<style scoped>

</style>