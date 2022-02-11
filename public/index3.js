

const runGame = (difficultyLevel,username,record,timer,cardsNumber)=>{

    console.log(timer)
    console.log(cardsNumber)
let counterOfClicks = document.getElementById("counter")
let difficultyTracker = document.getElementById("difficulty")
let username3 = document.getElementById("username3")
username3.textContent=username
difficultyTracker.textContent=difficultyLevel
let record3 = document.getElementById("record")
if (record==1000000){
    record3.textContent="NONE"
} else {
    record3.textContent=record
}


let imgContainer = document.getElementById("imgContainer")
let numberOfClicks = 0

let clicksWatcher = []
let idsClicked = []
let array22 =[]
let pairs = []
let openCards = 0
let array1=[]

    imgContainer.innerHTML=""
    let arr=[]

    let i=1
    while(i<=cardsNumber){

        let number=Math.floor(Math.random()*cardsNumber)+1
        if(!arr.includes(number)){
            arr.push(number)
            let child=document.createElement('img')
            child.setAttribute("src",`../imagesSetOf16/img${number}.jpg`)
            child.setAttribute("alt",`img${number}.jpg`)
            if (cardsNumber==16){
            child.setAttribute("width",`275px`)
            child.setAttribute("height",`158px`) 
            } else if (cardsNumber==20){
            child.setAttribute("width",`245px`)
            child.setAttribute("height",`160px`)  
            } else if (cardsNumber==24){
            child.setAttribute("width",`205px`)
            child.setAttribute("height",`160px`)  
            }
            child.setAttribute("style","border-style:solid;border-width:3px; border-radius:20px;margin: 10px 17px 10px 17px")
            child.setAttribute("id",`openCard${number}`)
            imgContainer.appendChild(child)
            child.addEventListener("click",()=>{
                numberOfClicks+=1
                child.setAttribute("src",`../imagesSetOf16/img${number}.jpg`)
                let childId =child.id
                arr123=childId.split("d")
                clicksWatcher.push(+arr123[1])
                pairs.push(+arr123[1])
                counterOfClicks.textContent = clicksWatcher.length.toString()
                
            })
            i++
        }  
    }

setTimeout(() => {

    if (cardsNumber==24){

    let card21 = document.getElementById(`openCard21`)
    card21.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card21.addEventListener("click", pairHandler)
    let card22 = document.getElementById(`openCard22`)
    card22.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card22.addEventListener("click", pairHandler)
    let card23 = document.getElementById(`openCard23`)
    card23.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card23.addEventListener("click", pairHandler)
    let card24 = document.getElementById(`openCard24`)
    card24.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card24.addEventListener("click", pairHandler)
    }

    if (cardsNumber>=20){

    let card17 = document.getElementById(`openCard17`)
    card17.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card17.addEventListener("click", pairHandler)
    let card18 = document.getElementById(`openCard18`)
    card18.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card18.addEventListener("click", pairHandler)
    let card19 = document.getElementById(`openCard19`)
    card19.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card19.addEventListener("click", pairHandler)
    let card20 = document.getElementById(`openCard20`)
    card20.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card20.addEventListener("click", pairHandler)
    }

    let card1 = document.getElementById(`openCard1`)
    card1.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card1.addEventListener("click", pairHandler)
    let card2 = document.getElementById(`openCard2`)
    card2.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card2.addEventListener("click", pairHandler)
    let card3 = document.getElementById(`openCard3`)
    card3.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card3.addEventListener("click", pairHandler)
    let card4 = document.getElementById(`openCard4`)
    card4.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card4.addEventListener("click", pairHandler)
    let card5 = document.getElementById(`openCard5`)
    card5.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card5.addEventListener("click", pairHandler)
    let card6 = document.getElementById(`openCard6`)
    card6.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card6.addEventListener("click", pairHandler)
    let card7 = document.getElementById(`openCard7`)
    card7.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card7.addEventListener("click", pairHandler)
    let card8 = document.getElementById(`openCard8`)
    card8.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card8.addEventListener("click", pairHandler)
    let card9 = document.getElementById(`openCard9`)
    card9.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card9.addEventListener("click", pairHandler)
    let card10 = document.getElementById(`openCard10`)
    card10.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card10.addEventListener("click", pairHandler)
    let card11 = document.getElementById(`openCard11`)
    card11.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card11.addEventListener("click", pairHandler)
    let card12 = document.getElementById(`openCard12`)
    card12.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card12.addEventListener("click", pairHandler)
    let card13 = document.getElementById(`openCard13`)
    card13.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card13.addEventListener("click", pairHandler)
    let card14 = document.getElementById(`openCard14`)
    card14.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card14.addEventListener("click", pairHandler)
    let card15 = document.getElementById(`openCard15`)
    card15.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card15.addEventListener("click", pairHandler)
    let card16 = document.getElementById(`openCard16`)
    card16.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
    card16.addEventListener("click", pairHandler)

    }, timer);


const pairHandler = (event) =>{
    if (pairs.length==2){
        if (!((pairs.includes(1)&&pairs.includes(2))||(pairs.includes(3)&&pairs.includes(4))||(pairs.includes(5)&&pairs.includes(6))
            ||(pairs.includes(7)&&pairs.includes(8))||(pairs.includes(9)&&pairs.includes(10))||(pairs.includes(11)&&pairs.includes(12))
            ||(pairs.includes(13)&&pairs.includes(14))||(pairs.includes(15)&&pairs.includes(16))||(pairs.includes(17)&&pairs.includes(18))
            ||(pairs.includes(19)&&pairs.includes(20))||(pairs.includes(21)&&pairs.includes(22))||(pairs.includes(23)&&pairs.includes(24)))){
                setTimeout(() => {
                    let pairMember1=document.getElementById(`openCard${pairs[0]}`)
                    console.log(pairs)
                    console.log(`openCard${pairs[0]}`)
                    pairMember1.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
                    let pairMember2=document.getElementById(`openCard${pairs[1]}`)
                    pairMember2.setAttribute("src",`../imagesSetOf16/backwards.jpg`)
                    pairs=[]

        
                }, 750);
            } else {
                pairs=[]
                openCards=openCards+2
                if (openCards==cardsNumber){
                    if (clicksWatcher.length<record){
                        record=clicksWatcher.length
                        record3.textContent=record
                        body1Obj={
                            "record":`${record}`
                        }
                        console.log(`${record}`)
                        axios.put(`http://localhost:4004/api/record`,body1Obj)
                        .then(res=>console.log(res))
                        .catch(err=>console.log(err))
                    }
                }
            }
            console.log(pairs)
            
        }
}


console.log(clicksWatcher)
}

axios.get('http://localhost:4004/api/level')
.then((res)=>{
    
    let {difficultyLevel,username,record,timer,cardsNumber}=res.data
    console.log(res.data)
    runGame(difficultyLevel,username,record,timer,cardsNumber)
})










