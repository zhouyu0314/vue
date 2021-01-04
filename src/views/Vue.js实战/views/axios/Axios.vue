<template>
    <div>
        <el-button size="mini" type="success" @click="testAxiosA">测试axiosA</el-button>
        <el-button size="mini" type="success" @click="testAxiosB">测试axiosB</el-button>
        <el-button size="mini" type="success" @click="testAxiosAll">测试axiosAll</el-button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Axios",
        methods: {
            testAxiosA() {
                axios({
                    url: 'http://123.207.32.32:8000/home/multidata',
                    method: 'get'//默认就是get
                }).then((res) => {
                    console.log(res);
                })
            },
            testAxiosB() {
                axios({
                    url: 'http://123.207.32.32:8000/home/data',
                    params: {//参数 对于get请求相当于 http://123.207.32.32:8000/home/data?pop=1
                        type: 'pop',
                        page: 1
                    },
                    method: 'get'//默认就是get
                }).then((res) => {
                    console.log(res);
                })
            },
            testAxiosAll() {
                axios.defaults.baseURL = 'http://123.207.32.32:8000';
                axios.defaults.timeout =5000;//超时时间
                axios.all([
                    axios({
                        url: '/home/multidata',
                        method: 'get'
                    }),
                    axios({
                        url: '/home/data',
                        method: 'get',
                        params: {
                            type: 'pop',
                            page: 1
                        },
                    })]).then(results => {
                    console.log(results);
                })
            }
        }
    }
</script>

<style scoped>

</style>