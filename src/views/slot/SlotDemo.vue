<template>
    <div>
        <el-row>
            <el-col :span="6">
            <el-form size="mini" label-width="80px">
                <el-form-item label="父组件">
                    <el-input clearable placeholder="父组件的输入框"></el-input>
                </el-form-item>
                <el-form-item label="匿名插槽">
                    <default-slot>
                        <el-input clearable placeholder="子组件的输入框"></el-input>
                    </default-slot>
                </el-form-item>
                <el-form-item label="具名插槽">
                    <name-slot>
                    <el-input clearable placeholder="子组件的输入框slot1" slot="nameSlot1"></el-input>
                    <el-input clearable placeholder="子组件的输入框slot1" slot="nameSlot2"></el-input>
                    </name-slot>
                </el-form-item>
            </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import DefaultSlot from "./components/DefaultSlot";
    import NameSlot from "./components/NameSlot";
    export default {
        name: "SlotDemo",
        /*
        默认的slot可以有多个，每个都是相同的内容
         */
        components:{DefaultSlot,NameSlot}
    }
</script>

<style scoped>

</style>