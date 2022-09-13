let buttons = document.querySelectorAll("button")
let screen = document.getElementById("res")

for(let items of buttons){
 items.addEventListener('click',function(e){
     let value = e.target.innerHTML
     
     if(value==="C"){
        value = ""
        screen.innerHTML=""
     }
     else if(value==="="){
          nums = /(\d+)/g
          value = eval(screen.innerHTML.replace(nums,'0b$1')).toString()
          screen.innerHTML=Number(value).toString(2)
     }
     else{
        screen.innerHTML+=value
     }
 })
}