import request from '@/network/request'


export function testAxiosA(data){
    return request({
        url:'/home/multidata',
        method:'get',
        data
    })
}
export function testAxiosPost(data){
    return request({
        url:'/api/file/textAxiosPost',
        method:'post',
        data
    })
}export function testAxiosGet(params){
    return request({
        url:'/api1/file/textAxios/2',
        method:'get',
        params
    })
}