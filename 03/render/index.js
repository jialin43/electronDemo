let fs = require('fs')
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