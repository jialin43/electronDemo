const {shell} = require('electron')

let aHref = document.querySelector('#aHref')
let cmd = document.querySelector('#cmd')
aHref.onclick=function(e){
    e.preventDefault()
    let href = this.getAttribute('href')
    shell.openExternal(href)
}
cmd.onclick=function(e){
    e.preventDefault
    window.open('powershell')
}