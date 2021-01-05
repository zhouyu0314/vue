<template>
    <div>
        <el-button @click="fn1" type="primary" size="mini">测试1</el-button>
        <el-button @click="fn2" type="primary" size="mini">测试2</el-button>
        <el-button @click="fn3" type="primary" size="mini">测试3</el-button>
    </div>
</template>

<script>
    export default {
        name: "PromiseDemo",
        data() {
            return {}
        }, methods: {
            fn1() {
                let flag = true;
                let promise1 = new Promise(function (resolve, reject) {
                    if (flag) {
                        resolve('A');
                    } else {
                        reject('B');
                    }
                })

                console.log(promise1);
                //[[PromiseState]]: "fulfilled"
                //[[PromiseResult]]: "A"

                //this.timeOut(1000,flag);


            },
            fn2() {
                let momsPromise = new Promise(function (resolve, reject) {
                    let momsSavings = 200000;
                    let priceOfPhone = 60000;
                    if (momsSavings > priceOfPhone) {
                        resolve({
                            brand: "iphone",
                            model: "6s"
                        });
                    } else {
                        reject("我们没有足够的储蓄，让我们多存点钱吧。");
                    }
                });
                momsPromise.then(function (value) {
                    console.log("哇，我得到这个电话作为礼物 ", JSON.stringify(value));
                }).catch(function (reason) {
                    console.log("妈妈不能给我买电话，因为 ", reason);
                }).finally(function () {
                    console.log(
                        "不管妈妈能不能给我买个电话，我仍然爱她"
                    );
                });
            },
            fn3(){
               let promise3 = Promise.reject("不感兴趣！");
                promise3.then((value)=>{
                    console.log('执行 resovle', value);
                }).catch((reason)=>{
                    console.log('拒绝 原因', reason);
                })


                //Promise.resolve('A');

            },
            timeOut(ms, flag) {
                setTimeout(new Promise(function (resolve, reject) {
                    if (flag) {
                        resolve('A');
                    } else {
                        reject('B');
                    }
                }), ms)
            }
        }
    }
</script>

<style scoped>

</style>