import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const walkers = getWalkers() 


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [,petId] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {
                    
                    // let assignedWalker = {name: ""}

                    for (const walker of walkers){
                        if (walker.id === pet.walkerId) {
                            window.alert(`${pet.name} is being walked by ${walker.name}`)
                        }
                    }

                }
            }
        }
    }
)


const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pets--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

