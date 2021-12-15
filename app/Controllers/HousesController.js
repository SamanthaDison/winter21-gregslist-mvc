import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { getHouseForm } from "../Component/HouseForm.js";


function _drawHouses() {
    let template = ''
    const house = ProxyState.houses
    house.forEach(h => template += h.Template)
    document.getElementById('listings').innerHTML = template
}

export class HousesController {
    constructor() {
        ProxyState.on('houses', _drawHouses)
    }

    drawHouses() {
        _drawHouses()
        document.getElementById('modal-body-slot').innerHTML = getHouseForm()
    }

    createHouse() {
        const form = window.event.target
        const houseData = {
            address: form.address.value,
            sqft: form.sqft.value,
            rooms: form.rooms.value,
            bathrooms: form.bathrooms.value,
            price: form.price.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value
        }
        housesService.createHouse(houseData)
        form.reset()
        bootstrap.Modal.getOrCreateInstance.getElementById('new-listing').hide()
    }
}