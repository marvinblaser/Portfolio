let cardOpen = document.querySelector(".card-open")
let cardsClosed = document.querySelectorAll(".card-closed")

cardsClosed.forEach(cardClosed =>{
    cardClosed.addEventListener('click', ()=>{
        cardOpen.classList.toggle('card-closed')
        cardOpen.classList.toggle('card-open')
        cardClosed.classList.toggle('card-open')
        cardClosed.classList.toggle('card-closed')
    })
})