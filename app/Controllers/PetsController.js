import { ProxyState } from "../AppState.js";
import { petsServices } from "../Services/PetsService.js";

export class PetsController {
  constructor() {
    ProxyState.on('pets', this.drawPets)
    this.drawPets()
  }
  drawPets() {
    let template = ''
    ProxyState.pets.forEach(pet => {
      template += /*html*/`
      <div class="row">
      <div class = "col-3 listing my-3">
      <div class = "card">
      <div>
      <img src="${pet.img}" class="w-100 p-2"/>
      </div>
      <div class="card body">
      <p>
      <h3> ${pet.species} ${pet.breed} ${pet.color} ${pet.age} </h3></p>
      <p>
      $ ${pet.price}
      </p>
    </div>
    </div>
    </div>`
    })
    document.getElementById('listings').innerHTML = template
  }
  addPet(event){
    event.preventDefault()
    console.log(event)
    let form = event.target
    let formData = {
      species: form.species.value,
      breed: form.breed.value,
      color: form.color.value,
      price: form.price.value,
      age: form.age.value,
      image: form.image.value
    }
    console.log(formData)
    petsServices.addPet(formData)
    form.reset()
    this.toggleForm()
  }
  toggleForm(){
    document.getElementById('pet-form').classList.toggle('d-none')
  }
}