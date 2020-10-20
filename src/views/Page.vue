<template>
    <div>
        <div class="block">
            <span class="demonstration">页数较少时的效果</span>
            <el-pagination
                    layout="prev, pager, next"
                    :total="50">
            </el-pagination>
        </div>
        <hr>
        <div class="block">
            <span class="demonstration">大于 7 页时的效果</span>
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
        <hr>
        <div class="block">
            <span class="demonstration">大于 7 页时的效果</span>
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000" :pager-count="10" :page-size="20" background>
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page"
    }
</script>

<style scoped>

</style>