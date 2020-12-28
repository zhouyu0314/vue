<template>
    <div>
        <el-divider content-position="left">创建对象</el-divider>

        <span></span>
        <el-button type="primary" size="mini" @click="createObj">创建对象</el-button>
    </div>
</template>

<script>
    import Person from './api/Person';
    import Area from './api/Area'
    import {getSimpleForMain,getSimpleForSub} from '../../api/system-util.js';
    export default {
        name: "ClassDemo",
        created(){
            this.area = new Area();
        },
        data(){
            return {
                person:{},
                flag:false,
                area:{},
            }
        },
        methods:{
            createObj(){
                // getSimpleForMain({}).then(response=>{
                //     console.log(response.data.data);
                //     this.area = response.data.data;
                // }).catch(error=>{
                //
                // })


                // this.person = new person();
                // this.flag = true;
                // let person = new Person();
                // person.longName='张三';
                // console.log(person.longName);
            }
        }
    }
</script>

<style scoped>

</style>