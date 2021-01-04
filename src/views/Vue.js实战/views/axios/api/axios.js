import request from '@/network/request'


export function testAxiosA(data){
    return request({
        url:'/home/multidata',
        method:'get',
        data
    })
}