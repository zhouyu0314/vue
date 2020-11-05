<template>
    <div>
        <h4 v-text="json"></h4>
        <el-divider></el-divider>
        <el-button type="primary" @click="handleBtn">处理JSON</el-button>
    </div>
</template>

<script>
    export default {
        name: "HandleJSON",
        data(){
            return{
                // json:'0KAZRaSaJcmB0S7T4uxiY5BvvYs/XHvdqFSPH0v4Vn097wJD+eWTD61gHh8Bu0UJ0CDBgL66mWM=' +
                //     '{"登簿人":"沈亚峰",' +
                //     '"权利人":"徐州卓正置业有限公司",' +
                //     '"不动产权证号":"苏(2020)徐州市不动产权第0007652号",' +//***************
                //     '"共有情况":"单独所有",' +
                //     '"坐落":"经济技术开发区年华巷8号金色年华小区二期18号楼 1-701",' +
                //     '"不动产单元号":"320302015175GB00625F00010243",' +
                //     '"权利类型":"国有建设用地使用权 / 房屋所有权",' +
                //     '"权利性质":"出让 / 市场化商品房",' +
                //     '"用途":"城镇住宅用地 / 住宅",' +
                //     '"面积":"共用宗地面积:1420.54㎡ / 房屋建筑面积:106.64㎡",' +
                //     '"使用期限":"2081/11/27",' +
                //     '"权利其他状况":"土地使用权面积:6.04㎡ 建筑面积:106.64㎡ 房间号:701 房屋结构:钢筋混凝土结构 房屋总层数:34层,' +//***************
                //     '所在层数:7层 ",' +
                //     '"附记":""}',
                json:'0KAZRaSaJcmB0S7T4uxiY5BvvYs/XHvdqFSPH0v4Vn097wJD+eWTD61gHh8Bu0UJ0CDBgL66mWM=' +
                    '{"登簿人":"沈亚峰",' +
                    '"权利人":"徐州卓正置业有限公司",' +
                    '"不动产权证号":"苏(2020)徐州市不动产权第0007652号",' +//***************
                    '"共有情况":"单独所有",' +
                    '"坐落":"经济技术开发区年华巷8号金色年华小区二期18号楼 1-701",' +
                    '"不动产单元号":"320302015175GB00625F00010243",' +
                    '"权利类型":"国有建设用地使用权 / 房屋所有权",' +
                    '"权利性质":"出让 / 市场化商品房",' +
                    '"用途":"城镇住宅用地 / 住宅",' +
                    '"面积":"共用宗地面积:1420.54㎡ / 房屋建筑面积:106.64㎡",' +
                    '"使用期限":"2081/11/27",' +
                    '"权利其他状况":"分摊土地面积:6.04㎡ 建筑面积:106.64㎡ 房间号:701 房屋结构:钢筋混凝土结构 房屋总层数:34层,' +//***************
                    '所在层数:7层 ",' +
                    '"附记":""}',
                parseJson:{tdsyqmj:'',bdcqzh:''}
            }
        },
        methods:{
            handleBtn(){
                let str = this.json;
                this.handleData(str);
                console.log(this.parseJson);
            },
            handleData(str){
                let jsonObj = JSON.parse(str.substring(str.indexOf("=")+1));
                this.parseJson.bdcqzh =  jsonObj['不动产权证号'].toString();
                let qlqtqk = jsonObj['权利其他状况'].toString();
                let tdsymjIndex = qlqtqk.indexOf('土地使用权面积:');
                if(tdsymjIndex !=-1){
                    let str1 = qlqtqk.split('土地使用权面积:');
                    this.parseJson.tdsyqmj = str1[1].substring(0,str1[1].indexOf('㎡'));
                }else{
                    let fttdmjIndex = qlqtqk.indexOf('分摊土地面积:');
                    if(fttdmjIndex !=-1){
                        let str2 = qlqtqk.split('分摊土地面积:');
                        this.parseJson.tdsyqmj = str2[1].substring(0,str2[1].indexOf('㎡'));
                    }else{
                        this.parseJson.tdsyqmj = 0 ;
                    }

                }
            }
        }
    }
</script>

<style scoped>

</style>
