<template>
    <div>
        <el-col :span="2" v-for="item in myFriends" :key="item.id">
            <img class="online" :src="item.headImg" v-if="item.isOnline" @click="chat(item)">
            <img class="not-online" :src="item.headImg" v-else="item.isOnline" @click="chat(item)">
            <p>{{item.username}}</p>
        </el-col>

        <search :searchVisible="searchVisible" :searchResult="searchResult" @findFriends="findFriendsListen"
                @addFriends="addFriendsListen"></search>
        <el-button type="success" @click="searchVisible = true">搜索好友</el-button>

        <el-dialog :title="chatTitle" :visible.sync="chatVisible" :close-on-click-modal="false">
            <div class="chat-window">
                <h4 v-for="(item,index) in recv" :key="index">{{item}}</h4>
            </div>
            <el-input type="textarea" style="width:400px ;" v-model="msg"></el-input>
            <el-button type="primary" @click="send">发送</el-button>
        </el-dialog>

    </div>
</template>

<script>
    import Friends from "./components/Friends";
    import Search from "./components/Search";

    import {queryMyFriends, queryFriendsByUsername, addFriend} from "./api/index";

    export default {
        components: {
            Search
        },
        name: "Netty",
        data() {
            return {
                websocket: null,
                text: '',
                userId: '',
                searchVisible: false,
                searchResult: [],
                myFriends: [],
                chatTitle: '',
                chatVisible: false,
                msg:'',
                current:null,
                recv:[]
            }
        },
        created() {
            this.userId = this.$route.query.userId;
            this.initWebSocket();
        },
        destroyed() {
            this.websocket.close() //离开路由之后断开websocket连接
        },
        methods: {
            send() {
                let param = {id: this.userId, flag: 'send',msg:this.msg,target:this.current.id};
                this.websocketsend(param);
            },
            //********************************
            initWebSocket() { //初始化weosocket
                this.websocket = new WebSocket("ws://" + _baseUrl + ":" + _wsPort + "/ws");
                this.websocket.onmessage = this.websocketonmessage;
                this.websocket.onopen = this.websocketonopen;
                // this.websocket.onerror = this.websocketonerror;
                // this.websocket.onclose = this.websocketclose;
                this.getFriends();//获取好友列表
            },
            websocketonopen() { //连接建立之后执行send方法发送数据
                let param = {id: this.userId, flag: 'up'};
                this.websocketsend(param);

            },
            websocketonerror() {//连接建立失败重连

                this.initWebSocket();
            },
            websocketonmessage(e) {
                var temp = JSON.parse(e.data);
                let friends = this.myFriends;
                if (temp.flag === 'up') {
                    //如果是用户上线
                    for (let i = 0; i < friends.length; i++) {
                        if (friends[i].id === temp.id) {
                            let data = friends[i];
                            data.isOnline = true;
                            friends.splice(i, 1, data);
                        }
                    }
                } else if (temp.flag === 'down') {
                    for (let i = 0; i < friends.length; i++) {
                        if (friends[i].id === temp.id) {
                            let data = friends[i];
                            data.isOnline = false;
                            friends.splice(i, 1, data);
                        }
                    }
                }else if(temp.flag === 'send'){
                    this.recv.push(temp.msg);
                }


            },
            websocketsend(data) {//数据发送
                let json = JSON.stringify(data);
                this.websocket.send(json);
            },
            websocketclose(e) {  //关闭
                console.log('断开连接', e);
            },
            getFriends() {
                queryMyFriends({id: this.userId}).then(res => {
                    this.myFriends = res.data;
                })
            },
            findFriendsListen(val) {
                queryFriendsByUsername({username: val}).then(res => {
                    this.searchResult = res.data
                })
            },
            addFriendsListen(val) {
                addFriend({id: this.userId, friendId: val.id}).then(res => {
                    if (res.data.status == 200) {
                        this.$message.success("添加成功")

                    } else if (res.data.status == 500) {
                        this.$message.error("服务异常")
                    }
                })

            },
            chat(val) {
                this.chatVisible = true;
                this.chatTitle = '与' + val.name + '聊天中...';
                this.current = val;
            }
        }
    }
</script>

<style scoped>
    .online {
        width: 100px;
        height: 100px;
    }

    .not-online {
        width: 100px;
        height: 100px;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
    }

    .chat-window {
        width: 400px;
        height: 300px;
        border: 1px solid black;
    }
</style>