const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener("click", function(){
        const image_id = card.getAttribute("id")
        const title = card.querySelector('#title').innerText
        const author = card.querySelector('.card__author').innerText

        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `/images/${image_id}.png`

        modalOverlay.querySelector('#modal-title').innerHTML = `${title}`
        modalOverlay.querySelector('#modal-author').innerHTML = `${author}`
    })
}



document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("img").src = ""
})