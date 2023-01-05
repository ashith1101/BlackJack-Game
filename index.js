let card=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")

let player={
    name:"Per",
    chip:145
}


let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chip

function getRandomCard(){
    let randomNumber=1+Math.floor(Math.random()*13)
    if(randomNumber===1){
        return 11
    }
    else if(randomNumber>10){
        return 10
    }
    else{
        return randomNumber  
    }
}

function start(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    card=[firstCard,secondCard]
    sum=card[0]+card[1]
    render()
}

function render(){
    cardEl.textContent="Cards: "
    for(let i=0;i<card.length;i++){
        cardEl.textContent+=card[i]+" "
    }
    
    sumEl.textContent="Sum: "+sum
    if(sum===21){
        message="Wohoo!, You've got BlackJack!"
        hasBlackJack=true
    }
    else if(sum<21){
        message="Do you want to draw a new card?"
    }
    else{
        message="You're out of Game!"
        isAlive=false
    }

    messageEl.innerText=message
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let thirdCard=getRandomCard()
        sum+=thirdCard
        card.push(thirdCard)
        render()
    }

}