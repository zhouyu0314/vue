<template>
    <div>
        <el-divider>子组件的slot-scope</el-divider>
        <slot name="scopeSlot1" :msg="param"></slot>
    </div>
</template>

<script>
    export default {
        name: "ScopeSlot",
        data(){
            return{
                param:'作用域插槽的数据',
            }
        }
    }
</script>

<style scoped>

</style>