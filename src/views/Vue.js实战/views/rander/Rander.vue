<template>
    <div>

        <render-sub1></render-sub1>
    </div>
</template>

<script>
    import RenderSub1 from "./components/RenderSub1";
    export default {
        name: "Rander",
        components:{
            'render-sub1':RenderSub1,
        },
        data(){
            return{
                input:'',
            }
        },methods:{

        }
    }
</script>

<style scoped>

</style>