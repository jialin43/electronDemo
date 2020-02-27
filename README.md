# electronDemo
技术胖教程练习
## 知识点
### nodeIntegration
> webPreferences Object (可选) - 网页功能的设置
nodeIntegration Boolean (可选) - 是否集成Node，默认为false。
node中的所有东西都可以在渲染进程中使用。会有module和require全局变量。
### remote
```
let BrowserWindow = require('electron').remote.BrowserWindow
```
在渲染进程中通过remote，可以获得BrowserWindow
### const {Menu} = require('electron')
等价于 `const Menu = require('electron').Menu`
解构赋值的基本规则是：只要等号右边不是对象或数组，就先将其转换为对象。由于undefined和null无法转换为对象，所以对它们解构赋值都会报错。
### 右键菜单
写在渲染页面上
```
const {remote} = require('electron')

let template = [
    {label:'复制'},
    {label:'剪切'},
    {label:'粘贴'},
]
var m = remote.Menu.buildFromTemplate(template)
window.addEventListener('contextmenu',function(e){
    e.preventDefault
    m.popup({window:remote.getCurrentWindow})
})
```
## 注意事项
1. 安装electron时总是安装失败，提示某个ip地址无响应，解决办法就是使用cnpm来安装即可。
