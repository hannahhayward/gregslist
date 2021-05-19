import { ProxyState } from "../AppState.js";
import { Pet } from "../Models/Pet.js";


class PetsServices{
  addPet(formData){
    let newPet = new Pet(formData.species, formData.breed, formData.color,formData.price, formData.image, formData.age)
    ProxyState.pets.unshift(newPet)
  }
}
export const petsServices = new PetsServices()