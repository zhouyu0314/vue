<template>
    <div>
    <el-divider>子组件的NameSlot1</el-divider>
    <slot name="nameSlot1"></slot>
    <el-divider>子组件的NameSlot2</el-divider>
    <slot name="nameSlot2"></slot>
    </div>
</template>

<script>
    import Slot from "../../../components/Slot";
    export default {
        name: "NameSlot",
        components: {Slot}
    }
</script>

<style scoped>

</style>