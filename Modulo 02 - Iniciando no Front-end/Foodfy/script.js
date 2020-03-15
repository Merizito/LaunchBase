const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modalTitle = document.querySelector('.modal-title')

for(let card of cards) {
    card.addEventListener("click", function(){
        const image_id = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `/images/${image_id}.png`

        if(image_id == "burger"){
            document.getElementById("modal-title").innerHTML = "Triplo bacon burger"
            document.getElementById("modal-author").innerHTML = "por Jorge Relato"

        }
        else if(image_id == "pizza"){
            document.getElementById("modal-title").innerHTML = "Pizza 4 estações"
            document.getElementById("modal-author").innerHTML = "por Fabiana Melo"

        }
        else if(image_id == "espaguete"){
            document.getElementById("modal-title").innerHTML = "Espaguete ao alho"
            document.getElementById("modal-author").innerHTML = "por Júlia Kinoto"

        }
        else if (image_id == "lasanha"){
            document.getElementById("modal-title").innerHTML = "Lasanha mac n' cheese"
            document.getElementById("modal-author").innerHTML = "por Juliano Vieira"

        }
        else if(image_id == "doce"){
            document.getElementById("modal-title").innerHTML = "Docinhos pão-do-céu"
            document.getElementById("modal-author").innerHTML = "por Ricardo Golvea"

        }
        else if(image_id == "asinhas"){
            document.getElementById("modal-title").innerHTML = "Asinhas de frango ao barbecue"
            document.getElementById("modal-author").innerHTML = "por Vania Steroski"

        }

    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("img").src = ""
})