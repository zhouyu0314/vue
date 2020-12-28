<template>
    <div>
        <el-divider>子组件的default-slot</el-divider>
        <slot><p>默认内容</p></slot>
        <el-divider>子组件的default-slot</el-divider>
        <slot><p>默认内容</p></slot>
    </div>
</template>

<script>
    export default {
        name: "DefaultSlot",
    }
</script>

<style scoped>

</style>