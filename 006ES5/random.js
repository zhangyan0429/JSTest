// var res = Math.random()
// console.log(res)

//取随机整数
//取10~20整数包括20
//向下取整  Math.floor(Math.random()*(大数 - 小数 + 1) + 小数 )
// var res = Math.floor(Math.random() * 11 + 10)
// console.log(res)


function getRandom(a,b) {
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    var res = Math.floor(Math.random() * (max - min + 1) )+ min

    return res
}

fn = getRandom(10,20)
console.log(fn)