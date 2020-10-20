<template>
    <div>
        <h3>关于slot的测试</h3>
        <slot><el-button type="success">默认的按钮</el-button></slot>
        <h4>具名插槽</h4>
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>
        <hr>
        <h4>作用域slot</h4>
        <slot :data="lan" name="scope">
            <span v-for="item in lan" :key="item" >{{item}} - </span>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "Slot",
        data(){
            return {
                lan:['Java','JavaScript','Go','C#','C++']
            }
        }
    }
</script>

<style scoped>

</style>
