export default {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding) {
    // el.addEventListener('load', function () {
    //   console.log('img加载成功')
    // })
    // 监听图片是否加载失败 ！！！！！
    el.addEventListener('error', function () {
      // console.log('img加载失败')
      // el.src = 'https://img0.baidu.com/it/u=1496409494,2999754585&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'
      el.src = binding.value
    })
    // console.log(el)
  }
}
