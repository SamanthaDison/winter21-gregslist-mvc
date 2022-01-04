import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"
import { api } from "./AxiosService.js"

class CarsService {

  async getAllCars() {
    const res = await api.get('cars')
    console.log('car', res)
    ProxyState.cars = res.data.map(c => new Car(c))
  }

  async removeCar(id) {
    const res = await api.delete(`cars/${id}`)
    console.log('deleting this car', res)
    ProxyState.cars = ProxyState.cars.filter(c => c.id !== id)
    // const car = ProxyState.cars.find(c => c.id === id)
    // if(car){
    // }  
  }

  async createCar(carData) {
    const res = await api.post('cars', carData)
    console.log('creating this car', res.data)
    // const car = new Car(carData)
    // ProxyState.cars.push(car)
    // ProxyState.cars = ProxyState.cars
    ProxyState.cars = [new Car(res.data), ...ProxyState.cars]
  }

  async editCar(id, carData) {
    const res = await api.put(`cars/${id}`, carData)
    console.log('editing this car', res.data)
    let index = ProxyState.cars.findIndex(c => c.id == id)
    ProxyState.cars.splice(index, 1, new Car(res.data))
    ProxyState.cars = ProxyState.cars

  }

}

export const carsService = new CarsService()