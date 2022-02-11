

let username222
let allRecordsDiv = document.getElementById("allRecords")
allRecordsDiv.style.display="none"
let recordSelect = document.querySelector('#record-select')
let pContainer = document.getElementById('greeting1')
let loginBtn=document.getElementById('login')
let hidingDiv=document.getElementById('hiding')
let registerBtn=document.getElementById('register')
let newUser=document.getElementById('newUser?')
let existingUser=document.getElementById("existingUser")
let usernameHeader=document.getElementById("username111")
let logOutBtn=document.getElementById("welcome3")
logOutBtn.style.display="none"
let child2=document.createElement("button")
child2.setAttribute("id","playBtn")
let child5=document.createElement("button")
child5.setAttribute("id","resetRecords")
child5.addEventListener("click",()=>{
    axios.delete(`http://localhost:4004/api/reset/${username222}`)
    .then((res=>{
        console.log("Request successful")
        scores2easy.textContent="HAVE NOT PLAYED EASY DIFFICULY"
        scores2medium.textContent="HAVE NOT PLAYED MEDIUM DIFFICULY"
        scores2hard.textContent="HAVE NOT PLAYED HARD DIFFICULY"
    }))
    .catch(err=>console.log(err))
})
let message1Div=document.getElementById("message1")
let message2Div=document.getElementById("message2")
let scores2easy=document.getElementById("scores2easy")
let scores2medium=document.getElementById("scores2medium")
let scores2hard=document.getElementById("scores2hard")
let welcome1=document.getElementById("welcome1")
let welcome2=document.getElementById("welcome2")
welcome1.style.display="none"
welcome2.style.display="flex"
message1Div.style.display="none"
message2Div.style.display="none"
child2.addEventListener("click",()=>{
    location.href="./index2.html"
})

const goBack = ()=>{
    pContainer.innerHTML=""
    newUser.style.display="none"
    existingUser.style.display="flex"
    loginBtn.style.display="flex"
    registerBtn.style.display="flex"
    child2.style.display="none"
    child5.style.display="none"
    message1Div.style.display="none"
    message2Div.style.display="none"
    welcome1.style.display="none"
    logOutBtn.style.display="none"
}




const buttonsOpen = () =>{

    getRecords()
    child2.setAttribute("style","border-radius:20px")
    child5.setAttribute("style","border-radius:20px")
    child2.textContent="PLAY"
    child5.textContent="RESET MY SCORES"
    logOutBtn.addEventListener("click",goBack)
    child2.style.display="row"
    child5.style.display="row"
    message1Div.style.display="flex"
    message2Div.style.display="flex"
    newUser.style.display="none"
    existingUser.style.display="none"
    loginBtn.style.display="none"
    registerBtn.style.display="none"
    welcome1.style.display="flex"
    welcome2.style.display="none"
    child2.setAttribute("style","border-radius:20px")
    child5.setAttribute("style","border-radius:20px")
    pContainer.appendChild(child2)
    pContainer.appendChild(child5)
    logOutBtn.style.display="flex"
    allRecordsDiv.style.display="flex"
}



const enteredUsername = (event) =>{
    event.preventDefault()


    let username=document.getElementById('input1')
    let input1=username.value
    username.value=""
    let body = {
        input1
    }

    axios.post('http://localhost:4004/api/input1',body)
    .then((res)=>{
        let {records,response,username}=res.data
        pContainer.innerHTML=""
        let child=document.createElement('p')

        console.log(res.data)

        if (response==true){
            username222=input1
            let recordsToDisplay=[]
                            if (records[0]==1000000){
                    recordsToDisplay.push("HAVE NOT PLAYED EASY DIFFICULY")
                } else {
                    recordsToDisplay.push(records[0]+" clicks for EASY DIFFICULTY")
                }
                if (records[1]==1000000){
                    recordsToDisplay.push("HAVE NOT PLAYED MEDIUM DIFFICULY")
                } else {
                    recordsToDisplay.push(records[1]+" clicks for MEDIUM DIFFICULTY")
                }
                if (records[2]==1000000){
                    recordsToDisplay.push("HAVE NOT PLAYED HARD DIFFICULY")
                } else {
                    recordsToDisplay.push(records[2]+" clicks for HARD DIFFICULTY")
                }   
                scores2easy.textContent=recordsToDisplay[0]
                scores2medium.textContent=recordsToDisplay[1]
                scores2hard.textContent=recordsToDisplay[2]
            usernameHeader.textContent=input1
            buttonsOpen()
        } else if(response==false){
            child.textContent=`${input1} is not a regestered username, please double check your spelling, or create a new username`
        }

        pContainer.appendChild(child)
})
    .catch(err=>console.log(err))
}

loginBtn.addEventListener("submit",enteredUsername)




const createUsername = (event) =>{
    event.preventDefault()

    let newUsername=document.getElementById("input2")
    let input2=newUsername.value
    console.log(input2)
    let body = {
        input2
    }
    newUsername.value=""
    let child=document.createElement('p')

    axios.post('http://localhost:4004/api/input2', body)
    .then((res)=>{
        let {records,response,username}=res.data
        if (response==false){
            username222=input2
            pContainer.innerHTML=""
            scores2easy.textContent="You don't have any  scores yet."
            scores2medium.textContent="Let's fix it! Time to click PLAY button."
            scores2hard.textContent="Good luck!"
            usernameHeader.textContent=input2
            buttonsOpen()
        } else if(response==true){
            pContainer.innerHTML=""
            child.textContent=`Username ${input2} is already taken, please create a different one`
            
        }
        pContainer.appendChild(child)
    })
    .catch(err=>console.log(err))
}


const getRecords = ()=> {
    axios.get('http://localhost:4004/api/records')
        .then(res => {
            res.data.forEach(usernameWithRecords => {
                const option = document.createElement('option')
                option.setAttribute('value', usernameWithRecords['username_id'])
                option.textContent = usernameWithRecords.username+":  EASY:  "+usernameWithRecords.easy_difficulty_record+" clicks"+", MEDIUM:  "+
                usernameWithRecords.medium_difficulty_record+" clicks"+", HARD: "+usernameWithRecords.hard_difficulty_record+" clicks"
                recordSelect.appendChild(option)
            })
        })
}


registerBtn.addEventListener("submit", createUsername)


