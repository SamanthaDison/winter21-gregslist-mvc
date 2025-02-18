import { generateId } from "../Utils/generateId.js"

export class House {
    constructor(data) {
        this.id = generateId()
        this.address = data.address
        this.sqft = data.sqft
        this.rooms = data.rooms
        this.bathrooms = data.bathrooms
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl

    }

    get Template() {
        return `
    <div class="col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.imgUrl}" alt="${this.address}-image">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.address}</b></p>
          <p class="text-center uppercase">${this.sqft}SQFT - ${this.rooms}R - ${this.bathrooms}BR</p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <div class="d-flex align-items-center">
          </div>
          <i class="mdi mdi-delete selectable" onclick="app.carsController.removeCar('${this.id}')"></i>
        </div>
      </div>
    </div>`
    }
}
