// 题目：一瓶啤酒5块,5个瓶盖能换一瓶酒，3个瓶身换一瓶酒，花100块能买来几瓶酒

function particalApply (fn, ...args1) {
  return function (...args2) {
    fn = fn.bind(this)
    return fn(...args1, ...args2)
  }
}
function calculator (ratio, value) {
  value += this.value
  let 当前的空瓶数 = Math.floor(value / ratio)
  总计已换的酒瓶数 += 当前的空瓶数
  this.value = value % ratio
  if (当前的空瓶数) 当前的瓶盖数.set(当前的空瓶数)
  if (当前的空瓶数) 当前的瓶身数.set(当前的空瓶数)
}
let 当前的余额 = {
  value: 0,
  set: particalApply(calculator, 5)
},
当前的瓶盖数 = {
  value: 0,
  set: particalApply(calculator, 5)
},
当前的瓶身数 = {
  value: 0,
  set: particalApply(calculator, 3)
},
总计已换的酒瓶数 = 0;

当前的余额.set(100)
window.console.log('最多能换'+总计已换的酒瓶数+'瓶酒。', '剩余瓶盖：'+当前的瓶盖数.value,'瓶身：'+当前的瓶身数.value)