import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js";
export class HousesController {
    constructor() {
        ProxyState.on('houses', this.drawHouses)
        this.drawHouses()
    }

    drawHouses() {
        let template = ''
        ProxyState.houses.forEach(house => {
            template += /*html*/`
            <div class = "row m-3">
        <div class="col-3 listing my-3 p-2">
        <div class = "card w-100">
        <div> 
        <img src="${house.img}" class="w-100 p-2"/>
        </div>
        <div class="card body">
        <p>
        <h3> ${house.year} ${house.beds} Beds ${house.baths} Baths ${house.sqft} sqft   </h3>
        </p>
        <p>
             $ ${house.price}
            </p>
        </div>
        </div>
        </div>`
        })
        document.getElementById('listings').innerHTML = template
    }
    addHouse(event) {
        event.preventDefault()
        console.log(event)
        let form = event.target
        let formData = {
            year: form.year.value,
            beds: form.beds.value,
            baths: form.baths.value,
            garage: form.garage.value,
            size: form.sqft.value,
            price: form.price.value,
            stories: form.stories.value,
            image: form.image.value
        }
        console.log(formData)
        housesService.addHouse(formData)
        form.reset()
        this.toggleForm()

    }
    toggleForm() {
        document.getElementById('house-form').classList.toggle('d-none')
    }
}
