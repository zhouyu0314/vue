export default  {//类似计算属性
    showNum: state => '当前最新的数量[' + state.count + ']',
    countPerson: state => state.person.length,
    moreAge(state) {//返回一个函数，此函数来过滤
        return (age) => {
            return state.person.filter(node => node.age >= age);
        }
    }
}