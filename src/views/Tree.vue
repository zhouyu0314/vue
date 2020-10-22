<template>
    <div>

        <el-button type="primary" @click="handleOpen">打开</el-button>
        <el-dialog width="50%" :visible.sync="dialogTableVisible" title="TREE" @open="show">
            <el-tree node-key="id" :data="param" :props="defaultProps" :filter-node-method="filterNode" ref="tree"
                     :highlight-current="true" :render-after-expand="false">
                    <span slot-scope="{node,param}" class="myspan">
                        <span v-text="node.label" ></span>
                        <span style="position: absolute;right: 0" class="myspan">
                            <el-button type="primary" size="mini" v-show="node.isLeaf">删除</el-button>
                        </span>
                    </span>
            </el-tree>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: "Tree",
        data() {
            return {
                filterText: "",
                dialogTableVisible: false,
                param: [
                    {
                        id: "1",
                        label: "政府相关",
                        children: [{id: "12", label: "好好学习，天天向上！"}]
                    },
                    {
                        id: "2",
                        label: "银行相关",
                        children: [{id: "21", label: "好好学习，天天向上！"},
                            {id: "23", label: "好好学习，天天向上！"}]
                    },
                    {
                        id: "3",
                        label: "企业相关",
                        children: [{id: "21", label: "好好学习，天天向上！"},
                            {id: "23", label: "好好学习，天天向上！"}]
                    }
                ],
                defaultProps: {
                    children: "children",
                    label: "label"
                },
            };
        },
        methods: {
            show(){
                setTimeout(()=>{
                    console.log("开");
                    let elementsByClassName = document.getElementsByClassName("el-tree-node__content");
                    //debugger
                    for (let i = 0; i < elementsByClassName.length; i++) {
                        //let parentNode = elementsByClassName[i].parentNode;
                        elementsByClassName[i].style = elementsByClassName[i].style.cssText + " margin: 5px 0; "
                    }
                },100)

            },
            handleOpen() {
                this.dialogTableVisible = true;


            },
            //关键词搜索
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            }
        }
    };
</script>

<style scoped>

</style>