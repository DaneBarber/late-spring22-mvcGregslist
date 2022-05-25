import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'Chevrolet', model: 'Impala', description: 'It balla', price: 10, year: 1964, color: '#000', imgUrl: 'https://m.media-amazon.com/images/I/51IpgyJ3GmL._AC_SX466_.jpg' }),
    new Car({ make: 'Buick', model: 'Grand National', description: 'It is grand', price: 15, year: 1984, color: '#ff0000', imgUrl: 'http://www.deansgarage.com/wp-content/uploads/GNpropsals.jpg' })
  ]
  /** @type {import('./Models/House').House[]} */
  houses = [new House({ style: 'Dutch Colonial', color: '#000', year: 1905, rooms: 6, bathrooms: 2, squareFootage: 3500, lotSize: .5, price: 250000, imgUrl: 'https://i0.wp.com/danaldaggett.com/wp-content/uploads/2020/07/cropped-0720House.jpg?w=2000&ssl=1', description: 'This is a lovely vintage FarmHouse that has more things to offer than pigs in a stye' })]
  /** @type {import('./Models/Job').Job[]} */
  jobs = [
    new Car({ make: 'Chevrolet', model: 'Impala', description: 'It balla', price: 10, year: 1964, color: '#000', imgUrl: 'https://m.media-amazon.com/images/I/51IpgyJ3GmL._AC_SX466_.jpg' }),
    new Car({ make: 'Buick', model: 'Grand National', description: 'It is grand', price: 15, year: 1984, color: '#ff0000', imgUrl: 'http://www.deansgarage.com/wp-content/uploads/GNpropsals.jpg' })
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
