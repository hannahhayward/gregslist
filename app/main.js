import { CarsController } from "./Controllers/CarsController.js"
import { HousesController } from "./Controllers/HousesController.js";
import { JobsController } from "./Controllers/JobsController.js";
import { PetsController } from "./Controllers/PetsController.js";
class App {

  // constructor(){
  //   this.carsController = new CarsController()
  // }

  carsController = new CarsController()
  housesController = new HousesController()
  petsController = new PetsController()
  jobsController = new JobsController()
}

const app = new App();

window["app"] = app