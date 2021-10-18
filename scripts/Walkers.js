import { CityList } from "./CityList.js"
import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    

                    
                    for (const city of cities){
                        if (city.id === walker.cityId) {
                            window.alert(`${walker.name} services ${city.name}`)

                        }
                    }
                    
                }
              // try a nested for loop to loop through cities and print city
            
            }
        }
    }
)


const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`

    }

    walkerHTML += "</ul>"

    return walkerHTML
}

