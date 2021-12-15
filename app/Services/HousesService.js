import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"


class HousesService {

    createHouse(houseData) {
        const house = new House(houseData)
        ProxyState.house = [...ProxyState.house, house]
    }
}

export const housesService = new HousesService()