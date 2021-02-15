import request from '@/network/request'


export function queryMyFriends(params){
    return request({
        url:'/api/wechat/queryMyFriends',
        method:'get',
        params
    })
}

export function queryFriendsByUsername(params){
    return request({
        url:'/api/wechat/queryFriendsByUsername',
        method:'get',
        params
    })
}

export function addFriend(data){
    return request({
        url:'/api/wechat/addFriend',
        method:'post',
        data
    })
}
