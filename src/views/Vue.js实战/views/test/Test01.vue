<template>
<div>
  <div v-for="(item,index) in param" :key="item.id">
    <h3>{{'ID:' + item.id}}</h3>
    <h3>{{'NAME:' + item.name}}</h3>
    <h3>{{'AGE:' + item.age}}</h3>
    <el-divider></el-divider>
  </div>

  <el-button type="primary" size="mini" @click="testBTN">test</el-button>
</div>
</template>

<script>
export default {
  name: "Test01",
  data(){
    return {
      param:[
        {id:'A1001',name:'张三',age:10},{id:'A1002',name:'李四',age:11},{id:'A1003',name:'王五',age:12}
      ]


    }
  },
  methods:{
    testBTN(){
      let data = [
        {id:'A1004',name:'Tom',age:10},{id:'A1005',name:'Jerry',age:11},{id:'A1006',name:'Joy',age:12}
      ];
      this.param = data;
    }
  }
}
</script>

<style scoped>

</style>