<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="6">
                <el-input size="mini" v-model="userId" clearable></el-input>
            </el-col>
            <el-col :span="2"><el-button type="primary" size="mini">提交</el-button></el-col>
        </el-row>

        <div style="height: 600px;overflow: auto">
            <p v-for="(item,index) of chatList" v-text="item" :key="index"></p>
        </div>

        <el-input v-model="message" placeholder="请输入" clearable size="mini"></el-input>
        <el-button type="primary" size="mini" @click="websocketsend(message)">发送</el-button>

    </div>
</template>

<script>
    export default {
        name: "WebSocket",
        data(){
            return {
                userId:'',
                channelId:'',
                websocket:null,
                chatList:[],
                message:'',
            }
        },
        created(){
            this.initWebSocket();
        },
        destroyed() {
            this.websocket.close() //离开路由之后断开websocket连接
        },
        methods:{
            initWebSocket(){ //初始化weosocket
                this.websocket = new WebSocket("ws://127.0.0.1:7000/hello");
                this.websocket.onmessage = this.websocketonmessage;
                this.websocket.onopen = this.websocketonopen;
                this.websocket.onerror = this.websocketonerror;
                this.websocket.onclose = this.websocketclose;
            },
            websocketonopen(){ //连接建立之后执行send方法发送数据
                // let param = {userId:this.userId};
                // this.websocketsend(param);

            },
            websocketonerror(){//连接建立失败重连

                this.initWebSocket();
            },
            websocketonmessage(e){
                console.log(e);
                console.log(e.data);
                //this.chatList.splice(this.chatList.length,0,e.data)
            },
            websocketsend(data){//数据发送
                let json  = JSON.stringify(data);
                this.websocket.send(json);
            },
            websocketclose(e){  //关闭
                console.log('断开连接',e);
            },








            // //判断是否支持ws
            // checkSupportWS(){
            //     let socket;
            //     if(window.WebSocket){
            //         this.socket = new WebSocket("ws://localhost:7000/hello");
            //         console.log("socket",this.socket);
            //         //相当于channelRead0，ev 受到服务器端回送的消息
            //         // this.socket.onmessage = function (ev) {
            //         //     console.log("ev",ev);
            //         //     this.chatList.push(ev);
            //         // }
            //         //
            //         // //相当于连接开启(感知到连接开启)
            //         // this.socket.onopen = function (ev) {
            //         //     this.chatList.push("连接开启了。。。");
            //         //
            //         // }
            //         //
            //         // //相当于连接关闭(感知到连接关闭)
            //         // this.socket.onclose = function (ev) {
            //         //     this.chatList.push("连接关闭了。。。");
            //         //
            //         // }
            //
            //     }else{
            //         this.$message({type:'error',message:'不支持WS！'})
            //     }
            // },
            // //发送消息到服务器
            // send(){
            //     if (!window.socket) {//县判断socket是否创建好
            //         return;
            //     }
            //     if (this.socket.readyState == WebSocket.OPEN) {
            //         console.log("发送消息");
            //         //通过socket发送消息
            //         this.socket.send(this.message);
            //     }else{
            //         this.$message({type:'error',message:'连接没有开启！'})
            //     }
            // }

        }
    }
</script>

<style scoped>

</style>