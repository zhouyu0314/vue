<template>
    <div class="block">
        <span class="demonstration">默认</span>
        <el-slider v-model="value1"></el-slider>
        <hr>
        <span class="demonstration">自定义初始值</span>
        <el-slider v-model="value2"></el-slider>
        <hr>
        <span class="demonstration">隐藏 Tooltip</span>
        <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        <hr>
        <span class="demonstration">格式化 Tooltip</span>
        <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
        <hr>
        <span class="demonstration">离散 不显示断点</span>
        <el-slider
                v-model="value1"
                :step="10"s>
        </el-slider>
        <hr>
        <span class="demonstration">离散 显示断点</span>
        <el-slider
                v-model="value1"
                :step="10" show-stops>
        </el-slider>
        <hr>
        <span class="demonstration">显示输入框</span>
        <el-slider
                v-model="value"
                show-input>
        </el-slider>
    </div>
</template>

<script>
    export default {
        name: "Slider",
        data() {
            return {
                value1: 0,
                value2: 30,
                value3: 20,
                value4: 0
            }
        },
        methods: {
            formatTooltip(val) {
                return val / 100;
            }
        },
        watch: {
            value1() {
                console.log(`value1:${this.value1}`)
            }
        }
    }
</script>

<style scoped>

</style>