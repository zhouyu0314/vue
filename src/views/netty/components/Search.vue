<template>
    <div>
        <el-dialog title="收货地址" :visible.sync="searchVisible" :close-on-click-modal="false">
            <el-form :model="form" label-width="80px" :inline="true" size="mini">
                <el-form-item label="用户名">
                    <el-input clearable v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="findFriends" size="mini">搜索</el-button>
                </el-form-item>
            </el-form>
            <el-divider></el-divider>
            <div class="search-div">
                <div v-for="item in searchResult" :key="item.id" @click="add(item)">
                    <el-image
                            style="width: 100px; height: 100px"
                            :src="item.headImg"
                            ></el-image><p>{{item.username}}</p>
                </div>

            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Search",
        props: {
            searchVisible: {
                type: Boolean,
                default: false
            },
            searchResult:{
                type: Array,
                default: ()=>[]
            }
        },
        data() {
            return {
                form: {
                    username: '',
                }
            }
        },
        methods: {
            findFriends() {
                this.$emit("findFriends", this.form.username);
            },
            add(val){
                this.$emit("addFriends", val);
            }
        }
    }
</script>

<style scoped>
.search-div{
    width: 100px;
    height: 100px;
    float: left;
}
</style>