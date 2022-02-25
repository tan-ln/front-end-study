// 从 argvs 数组中取出
const argvs = process.argv.slice(2)
// console.log(argvs.toString())
switch (argvs[0]) {
    case 'init':
        console.log('初始化')
        break
    case 'install':
        var installName = argvs[1]
        console.log('正在安装' + installName)
        break
    case 'uninstall':
        console.log('uninstall')
        break
    default:
        break
}