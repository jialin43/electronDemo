let fs = require('fs')
const {remote} = require('electron')
let BrowserWindow = require('electron').remote.BrowserWindow
window.onload=function(){
    let btn = this.document.querySelector('#btn')
    let div = this.document.querySelector('#girls')
    btn.onclick = function(){
        browserwindow = new BrowserWindow({width:800,height:600})
        browserwindow.loadFile('child.html')
        browserwindow.on('close',()=>{
            browserwindow = null
        })
    }
}
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