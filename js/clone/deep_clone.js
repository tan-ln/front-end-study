// js 复杂对象 引用拷贝
// 递归树 key = value 

// 1. 递归主体
// 2. 

function deepClone(o1, o2) {
    for (const k in o2) {
        if (typeof o2[k] === 'object') {
            o1[k] = {}
            deepClone(o1[k], o2[k])
        } else {
            o1[k] = o2[k]
        }
    }
}

let obj = {
    a: 1,
    b: [1, 2, 3],
    c: {
        d: 4
    }
}

let emptyObj = Object.create(null)
deepClone(emptyObj, obj)
console.log(emptyObj)