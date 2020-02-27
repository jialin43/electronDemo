let fs = require('fs')
window.onload=function(){
    let btn = this.document.querySelector('#btn')
    let div = this.document.querySelector('#girls')
    btn.onclick = function(){
        fs.readFile('name.txt',(err,data)=>{
                div.innerHTML = data
            
            
        })
    }
}