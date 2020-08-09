const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')
const maximizeModal = document.querySelector('.maximize-modal')
const closeModal = document.querySelector('.close-modal')


for (let card of cards) {
    card.addEventListener("click", function(){
        const curso = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${curso}`

        
            closeModal.setAttribute("style", "color: white")
            maximizeModal.setAttribute("style", "color: white")

            closeModal.addEventListener("mouseover", function(){

                closeModal.setAttribute("style", "filter: brightness(100%)")
            })
            closeModal.addEventListener("mouseout", function(){

                closeModal.setAttribute("style", "color: white")
                closeModal.setAttribute("style", "filter: brightness(80%)")
            })

            maximizeModal.addEventListener("mouseover", function(){
                maximizeModal.setAttribute("style", "filter: brightness(100%)")
            })
            maximizeModal.addEventListener("mouseout", function(){
                maximizeModal.setAttribute("style", "color: white")
                maximizeModal.setAttribute("style", "filter: brightness(80%)")
            })
        
    })
}

closeModal.addEventListener("click", function(){
    modal.classList.remove('maximize')
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
    modal.setAttribute("style", "background-color: #282a36")
})

maximizeModal.addEventListener("click", function(){
    if(modal.classList.contains('maximize')){
        modal.classList.remove('maximize')
    }else{
        modal.classList.add('maximize')
    }
})