const {Menu} = require('electron')
var template = [
    {
        label:'文件',
        submenu:[
            {
                label:'新建',
                accelerator:'ctrl+s',
                click:()=>{
                    // action
                    
                }
            },
            {
                label:'打开'
            },
            {
                label:'保存'
            },
            {
                label:'退出'
            }
        ]
    }
]

var menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)