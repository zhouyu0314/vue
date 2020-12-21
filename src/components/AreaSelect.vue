<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-form size="mini" :model="ArearesultParam" :rules="areaRules" ref="areaFrom" label-width="100px"
                         inline>
                    <el-form-item label="请选择省">
                        <el-select clearable v-model="ArearesultParam.province" placeholder="请选择"
                                   @change="handleProvinceChange(1)">
                            <el-option
                                    v-for="item in areaParam.provinceList"
                                    :key="item.id"
                                    :label="item.codeName"
                                    :value="item.codeNo">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="请选择市">
                        <el-select clearable v-model="ArearesultParam.city" placeholder="请选择"
                                   @change="handleProvinceChange(2)">
                            <el-option
                                    v-for="item in areaParam.cityList"
                                    :key="item.id"
                                    :label="item.codeName"
                                    :value="item.codeNo">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="请选择区县">
                        <el-select clearable v-model="ArearesultParam.region" placeholder="请选择"
                                   @change="handleProvinceChange(3)">
                            <el-option
                                    v-for="item in areaParam.regionList"
                                    :key="item.id"
                                    :label="item.codeName"
                                    :value="item.codeNo">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="请选择网点">
                        <el-select clearable v-model="ArearesultParam.branch" placeholder="请选择"
                                   @change="handleProvinceChange(4)">
                            <el-option
                                    v-for="item in areaParam.branchList"
                                    :key="item.id"
                                    :label="item.codeName"
                                    :value="item.codeNo">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-button type="primary" @click="btn">打印</el-button>
    </div>
</template>

<script>
    export default {
        name: "AreaSselect",
        props: ['AreaInitData', 'SubAreaList'],
        computed: {
            getResultParamProvince: function () {
                return this.ArearesultParam.province;
            },
            getResultParamcity: function () {
                return this.ArearesultParam.city;
            },
            getResultRegion: function () {
                return this.ArearesultParam.region;
            }
        },
        created() {

        },
        mounted() {

        },
        watch: {
            AreaInitData() {
                console.log("AreaInitData");
                this.initArea();
            },
            SubAreaList: {
                handler(val) {
                    this.initSubArea();
                },
                immediate: true,
                deep: true
            }
        },
        data() {
            return {
                areaParam: {//地区
                    provinceList: [], //省
                    cityList: [], //市
                    regionList: [], //区县
                    branchList: [], //网点
                    flag: ''//一个标记,方便得知当前正在操作的市那个区域选择框
                },
                areaRules: {},

                ArearesultParam: {//最后返回后台的结果集
                    province: '',//省
                    city: '',//市
                    region: '',//区县
                    branch: ''//网点
                }

            };
        },
        methods: {
            btn() {
                console.log(this.SubAreaList);
            },
            initArea() {
                this.areaParam.provinceList = this.AreaInitData;
            },
            initSubArea() {
                switch (this.SubAreaList.flag) {
                    case 1://如果操作的是省级选择框
                        this.areaParam.cityList = this.SubAreaList.SubAreaData;
                        this.areaParam.regionList = [];
                        this.areaParam.branchList = [];

                        this.ArearesultParam.city = '';
                        this.ArearesultParam.region = '';
                        this.ArearesultParam.branch = '';

                        break;
                    case 2://如果操作的是市级选择框
                        this.areaParam.regionList = this.SubAreaList.SubAreaData;
                        this.areaParam.branchList = [];

                        this.ArearesultParam.region = '';
                        this.ArearesultParam.branch = '';
                        break;
                    case 3://如果操作的是区县级选择框
                        this.areaParam.branchList = this.SubAreaList.SubAreaData;
                        this.ArearesultParam.branch = '';
                        break;
                }
            },
            handleProvinceChange(num) {//省级选择框改变事件
                console.log("handleProvinceChange");
                this.getSUbAreaFromSys(num);
            },
            //区域选择 根据id获取子集阶段
            getSUbAreaFromSys(num) {
                //获取flag得知当前正在操作的是哪个选择框
                let flag = num;
                let data;
                switch (flag) {
                    case 1://如果操作的是省级选择框
                        data = this.areaParam.provinceList;
                        break;
                    case 2://如果操作的是市级选择框
                        data = this.areaParam.cityList;
                        break;
                    case 3://如果操作的是区县级选择框
                        data = this.areaParam.regionList;
                        break;
                    case 4://如果操作的是网点级选择框
                        data = this.areaParam.branchList;
                        break;
                }
                //根据当前的flag标记为得到对象的区域选择框的codeNo
                let codeNo = flag === 1 ? this.ArearesultParam.province : flag === 2 ? this.ArearesultParam.city : flag === 3 ? this.ArearesultParam.region : '';
                let id = '';
                //如果为空,则说明是最后一级选择框,没必要再请求后台了
                if (isNotNull(codeNo)) {
                    //for循环遍历当前操作的选择框的集合,找到你选中的那个元素的id
                    data.forEach(data => {
                        if (data.codeNo === codeNo) {
                            id = data.id;
                        }
                    });
                    let param = {id: id, flag: num}
                    this.$emit('AreaId', param);
                }

            }
        }
    }
</script>

<style scoped>

</style>