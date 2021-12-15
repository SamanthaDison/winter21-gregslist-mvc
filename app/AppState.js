import { Car } from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { House } from "./Models/House.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'ford', model: 'focus', year: 2008, price: 7500, description: 'Like new only 100,000 miles', color: '#91e880', imgUrl: 'https://i.pinimg.com/originals/c1/d1/a8/c1d1a890282f877de2ef09cd53131cdb.jpg' }),
    new Car({ make: 'ford', model: 'taurus wagon', year: 1989, price: 1000, description: 'Great Family vehicle for long vacations', color: '#93776a', imgUrl: 'https://cdn.motor1.com/images/mgl/xWqly/s3/home-built-christmas-vacation-display-includes-movie-s-epic-vehicles.jpg' }),
    new Car({ make: 'Elven', model: 'Sleigh', year: 1700, price: 900000, description: 'It only works once a year, and has 8 horsepower', color: '#f44545', imgUrl: 'https://cdn.shopify.com/s/files/1/1319/9267/products/metal-sleigh_1_1024x1024.jpg' })
  ]
  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({ address: '1234 Main St', sqft: 2100, rooms: 4, bathrooms: 3.5, price: 450000, description: 'Comfortable sized single-family home', imgUrl: 'https://webassetsprdnvrsan.blob.core.windows.net/images/f0b7d0fd-1451-4299-9e86-8b3c83de0a05/desktop/thumbnail' }),
    new House({ address: '4567 S Clearwater Ln', sqft: 4500, rooms: 5, bathrooms: 4.5, price: 750000, description: 'Newly renovated mid-century modern home with bonus room', imgUrl: 'https://images.dwell.com/photos/6257422372108419072/6451435078668066816/large.jpg' }),
    new House({ address: '8672 E Carlton Bay Apt 201', sqft: 700, rooms: 1, bathrooms: 1, price: 1100, description: 'Luxury studio apartment with full amenities', imgUrl: 'https://rentpath-res.cloudinary.com/w_336,h_280,t_rp,cs_tinysrgb,fl_force_strip,c_fill/e_unsharp_mask:50,q_auto/4f472736377fa6fb7879d102ab1b7997' })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
