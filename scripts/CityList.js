import { getCities } from "./database.js"

const cities = getCities()


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {

        citiesHTML += `<li id="walker--${city.id}">${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

