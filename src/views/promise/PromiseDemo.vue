<template>
    <div>
        <el-button size="mini" type="primary" @click="fn1">用法1</el-button>
<!--        <el-button size="mini" type="primary" @click="fn2">用法2</el-button>-->
    </div>
</template>

<script>
    export default {
        name: "PromiseDemo",
        data() {
            return {}
        }, methods: {
            //用法1
            fn1() {

                this.sleep(500).then((resolve) => console.log("finished")).then((reject) => console.log("ex"));;
            },
            sleep(ms) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        throw 'ex';
                    }, ms);
                })
            },
            // fn2(){
            //     let promise = new Promise(function(resolve, reject){
            //         console.log("1");
            //         resolve();
            //     });
            //     setTimeout(()=>console.log("2"), 0);
            //     promise.then(() => console.log("3"));
            //     console.log("4");
            // }

        }
    }
</script>

<style scoped>

</style>