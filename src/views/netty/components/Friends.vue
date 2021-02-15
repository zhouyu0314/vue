<template>
    <div>
        <el-col :span="2" v-for="item in myFriends" :key="item.id">
            <img class="online"  :src="item.headImg"  v-if="item.isOnline">
            <img class="not-online"  :src="item.headImg"  v-else="item.isOnline">
            <p>{{item.username}}</p>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: "Friends",
        props: {
            myFriends: {
                type: Array,
                default: () => []
            }
        },
        date(){
            return {
                classes:{
                    notonline:true
                }
            }
        }
    }
</script>

<style scoped>
    /*.online {*/
    /*    width: 100px;*/
    /*    height: 100px;*/
    /*}*/
    /*.not-online {*/
    /*    width: 100px;*/
    /*    height: 100px;*/
    /*    filter: grayscale(100%);*/
    /*    -webkit-filter: grayscale(100%);*/
    /*    -moz-filter: grayscale(100%);*/
    /*    -ms-filter: grayscale(100%);*/
    /*    -o-filter: grayscale(100%);*/
    /*}*/
</style>