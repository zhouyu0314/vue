import request from '@/utils/request';

export function getSimpleForMain(data) {
    return request({
        url: "http://"+_baseUrl + ':' + _basePort + '/api/code/getSimpleForMain',
        method: 'post',
        data,
    })
}

export function getSimpleForSub(data) {
    return request({
        url: "http://"+_baseUrl + ':' + _basePort + '/api/code/getSimpleForSub',
        method: 'post',
        data,
    })
}