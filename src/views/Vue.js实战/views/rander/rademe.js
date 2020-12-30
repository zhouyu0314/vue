// @returns {VNode}
createElement(
    // {String | Object | Function}
    // 一个 HTML 标签字符串，组件选项对象，或者
    // 解析上述任何一种的一个 async 异步函数，必要参数。
    'div',

    // {Object}
    // 一个包含模板相关属性的数据对象
    // 这样，您可以在 template 中使用这些属性。可选参数。
    {
      // (详情见下一节)
    },

    // {String | Array}
    // 子节点 (VNodes)，由 `createElement()` 构建而成，
    // 或使用字符串来生成“文本节点”。可选参数。
    [
      '先写一些文字',
      createElement('h1', '一则头条'),
      createElement(MyComponent, {
        props: {
          someProp: 'foobar'
        }
      })
    ]
)
//就是说createElement（params1，params2，params3）接受三个参数，每个参数的类型官方介绍已经说明
//https://www.cnblogs.com/yubin-/p/11543734.html