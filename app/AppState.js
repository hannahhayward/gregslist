import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import {Pet} from "./Models/Pet.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  /** @type {House[]} */
  /** @type {Pet[]} */
  cars = [
    new Car("Honda", "Accord", 10000, "rusty", 500, "//placehold.it/500x500")
  ]
  houses = [
    new House(2012, 3, 2, 2, 2000,1,500000,"https://www.pinoyeplans.com/wp-content/uploads/2018/02/SHD-2017036-DESIGN1_View01.jpg")
  ]
  pets = [
    new Pet ("Dog", "Corgie", "Orange", 250,"https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg","10 weeks")
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
