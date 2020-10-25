<template>
    <div>
        <h2>当前值为：{{count}}</h2>
        <my-add @case="listen" :num="num"></my-add>
        <my-sub ref="suibian"></my-sub>
        <hr>
        <!--        <h2>{{$store.getters.showNum}}</h2>-->
        <h2>getters:{{showNum}}</h2>
        <hr>
        <h2>父组件拿子组件值或者调用子组件方法</h2>
        <h2>子组件值：{{sub}}</h2>
        <el-button type="success" @click="sub1">拿sub子组件的值并显示到上面</el-button>
        <el-button type="warning" @click="sub2">调用sub子组件的方法</el-button>
        <br>
        <hr>
        <my-slot>
            <!--此为普通插槽，子组件中定义的<slot></slot>内的内容-->
            <h3>自定义内容(slot)</h3>
            <h3>自定义内容(slot)</h3>
            <h3>自定义内容(slot)</h3>
            <!--具名插槽，按子组件插槽的名字识别<slot name="left"></slot>-->
            <template v-slot:left>
                <button>具名slot-1</button>
            </template>

            <template v-slot:center>
                <h3>具名slot-2</h3>
            </template>

            <template v-slot:right>
                <router-link to="#">具名slot-3</router-link>
            </template>
<!--混合 v-slot:name="xxx"-->
            <!--<template v-slot:asd(作用域插槽的名字)="data(这个名字随便起,代表的是子组件的值)">-->
            <template v-slot:name="dataA">
                <button v-for="item in dataA.dataB">{{item}}</button><!--dataA.dataB dataA是拿到的子组件传过来的值(:dataB="lan"),dataB是代表的才是lan-->
            </template>
        </my-slot>
        <button @click="toIndex">回到主页</button>

    </div>
</template>

<script>
    import {mapState, mapGetters} from "vuex"
    import Add from "../components/Add.vue"
    import Sub from "../components/Sub.vue"
    import Slot from "../components/Slot";

    export default {
        name: "Counter",
        data() {
            return {
                num: 100,
                sub: ''
            }
        },
        components: {
            "my-add": Add,
            "my-sub": Sub,
            "my-slot": Slot
        },
        computed: {
            ...mapState(['count']),
            ...mapGetters(['showNum'])
        },
        methods: {
            toIndex() {
                this.$router.push("/")
            },
            listen(item) {
                this.$message({
                    message: `来自父组件的提示:${item}`,
                    type: 'success'
                })
            },
            sub1() {
                this.sub = this.$refs.suibian.name;
            },
            sub2() {
                this.$refs.suibian.showsub();
            }
        }
    }


</script>

<style scoped>

</style>
