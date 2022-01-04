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
  createCar(carData) {
    const car = new Car(carData)
    // ProxyState.cars.push(car)
    // ProxyState.cars = ProxyState.cars
    ProxyState.cars = [...ProxyState.cars, car]
  }


}

export const carsService = new CarsService()