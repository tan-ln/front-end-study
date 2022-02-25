# process 进程
> process 对象是一个全局变量，它提供当前 Node.js 进程的有关信息
> 因为是全局变量，无需使用 require()

## process.argv
> process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数

前两个参数：
```
[ 'D:\\Program Files\\nodejs\\node.exe',
  'd:\\MXJS\\js_fullStack_study\\node\\process\\argv',
  ...
```

**可用来判断用户输入如：npm init**
```js
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
```