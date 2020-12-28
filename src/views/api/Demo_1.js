let person = [
    {id: 'A10001', name: '张三', age: 10, address: '江苏徐州'},
    {id: 'A10003', name: '李四', age: 12, address: '山东菏泽'},
    {id: 'A10004', name: '王五', age: 14, address: '安徽黄山'},
    {id: 'A10005', name: '赵六', age: 15, address: '河南郑州'},
];

for (let data in person) {
    console.log(data);
}

person.forEach(data=> {
    if (data.id == 'A10001') {
        console.log(data);
    }else{
        console.log('未找到');
    }
});