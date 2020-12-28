<template>
    <div>
        <el-row>
            <el-col :span="6">
                <el-form size="mini" label-width="100px">
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
                            <template slot="nameSlot1">
                                <el-input clearable placeholder="子组件的输入框slot1"></el-input>
                            </template>
                            <template slot="nameSlot2">
                                <el-input clearable placeholder="子组件的输入框slot2"></el-input>
                            </template>
                        </name-slot>
                    </el-form-item>

                    <el-form-item label="作用域插槽">
                        <scope-slot>
                            <template slot-scope="props" slot="scopeSlot1">
                                <p>来组父组件的内容</p>
                                <p>{{ props.msg }}</p>
                            </template>

                        </scope-slot>

                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import DefaultSlot from "./components/DefaultSlot";
    import NameSlot from "./components/NameSlot";
    import ScopeSlot from "./components/ScopeSlot";

    export default {
        name: "SlotDemo",
        /*
        默认的slot可以有多个，每个都是相同的内容
         */
        components: {DefaultSlot, NameSlot, ScopeSlot}
    }
</script>

<style scoped>

</style>