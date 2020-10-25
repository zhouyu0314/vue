<template>
    <div>
        <h3>关于slot的测试</h3>
        <slot></slot>
        <h4>具名插槽</h4>
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>
        <hr>
        <h4>作用域slot</h4>
        <slot :dataB="lan" name="name">
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
