import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService{
  addHouse(formData){
    let newHouse = new House(formData.year, formData.baths, formData.baths, formData.stories, formData.size, formData.garage, formData.price, formData.image)
    ProxyState.houses.unshift(newHouse)
  }
}
export const housesService = new HousesService()