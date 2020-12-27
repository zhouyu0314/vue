<template>
    <div>
        <el-divider>子组件的default-slot</el-divider>
        <slot></slot>
        <el-divider>子组件的default-slot</el-divider>
        <slot></slot>
    </div>
</template>

<script>
    import Slot from "../../../components/Slot";
    export default {
        name: "DefaultSlot",
    }
</script>

<style scoped>

</style>