<template>
    <div>
        <test-sub ref="dddd"></test-sub>
        <button @click="btn">+</button>
    </div>

</template>

<script>
    import TestSub from "../components/TestSub";

    export default {
        name: "Test",
        components: {TestSub},
        data(){
            return {

            }
        },
        methods:{
            btn(){
           this.$refs.dddd.btn();
            }
        }
    }
</script>

<style scoped>

</style>