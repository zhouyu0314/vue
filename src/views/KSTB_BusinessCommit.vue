<template>
    <div>
        <area-select :AreaInitData="AreaInitData"
                     :SubAreaList="SubAreaList"
                     @AreaId="AreaIdListen"></area-select>
    </div>
</template>

<script>
    import {getSimpleForMain, getSimpleForSub} from '@/api/system-util';
    import AreaSelect from "../components/AreaSelect";

    export default {
        name: 'KSTB_BusinessCommit',
        components: {
            'area-select': AreaSelect
        },
        computed: {},
        created() {
            this.getMainAreaFromSys();
        },
        mounted() {

        },
        watch: {},
        data() {
            return {
                AreaInitData: [],
                SubAreaList: {
                    flag: '',
                    SubAreaData: [],
                },

            };
        },
        methods: {
            //加载码表,获取位置信息
            getMainAreaFromSys() {
                getSimpleForMain({systemType: 'system', codeNo: '1013'}).then(response => {
                    this.AreaInitData = response.data.data;
                });
            },
            //监听子组件传过来的值
            AreaIdListen(param) {
                getSimpleForSub({systemType: 'system', codeNo: '1013', id: param.id}).then(response => {
                    this.SubAreaList.SubAreaData = response.data.data;
                    this.SubAreaList.flag = param.flag;
                });
            }

        }
    };
</script>

<style scoped>

</style>

