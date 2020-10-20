<template>
    <div>
        <button @click="handle_add">+</button>
        <button @click="handle_addN">+N</button>
        <button @click="async_add">延迟+1</button>
        <button @click="async_addN">延迟+N</button>
        <hr>
        <h3 style="text-align: center">测试子传父</h3>
        <!--通过$emit发射出去，父组件接收-->
        <el-button type="primary" v-for="item in categories"
                   :key="item.id" v-text="item.product" @click="btn_click(item)"></el-button>
        <hr>
        <h3>父组件传值：{{num}}</h3>

    </div>
</template>

<script>
    import {mapMutations, mapActions} from "vuex"

    export default {
        name: "Add",
        data() {
            return {
                categories: [{id: 1, product: '电脑数码'}, {id: 2, product: '家具家电'},
                    {id: 3, product: '体育用品'}, {id: 4, product: '休闲零食'}]
            }
        },
        methods: {
            ...mapMutations(['add', 'addN']),
            ...mapActions(['addAsync', 'addNAsync']),
            handle_add() {
                this.add();
            },
            handle_addN() {
                this.addN(3);
            },
            async_add() {
                this.addAsync();
            },
            async_addN() {
                this.addNAsync(3);
            },
            btn_click(item) {
                this.$emit('case', item);
            }
        },
        props: ['num']
    }
</script>

<style scoped>

</style>
