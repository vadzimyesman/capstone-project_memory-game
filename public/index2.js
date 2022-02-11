

let choiceForm = document.getElementById("choice")
let startGameBtn=document.getElementById("choiceBtn")
let allBtns = document.querySelectorAll('input[name="diffOpt"]')
let choiceContainer = document.getElementById("choiceContainer")
let timer
console.log(allBtns)
startGameBtn.addEventListener("click",(event)=>{
event.preventDefault(event)
let difficulty=""
    for (i=0;i<allBtns.length;i++){
        if(allBtns[i].checked){
            difficulty=allBtns[i].value
            break
        }       
    }
    console.log(difficulty)
    if (difficulty){
        location.href="./index3.html"
    }

    let body ={
        difficulty
    }

console.log(timer)


  
    axios.put('http://localhost:4004/api/option',body)
    .then ((res)=>{
        console.log(res.data)
    })
    .catch(err=>console.log(err))

})