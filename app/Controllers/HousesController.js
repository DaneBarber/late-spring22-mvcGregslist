import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";


function _drawHouses() {
  // get all the houses and build a template
  let houses = ProxyState.houses
  let template = ''

  houses.forEach(h => {
    template += h.Template
  })
  document.getElementById('listings').innerHTML = template
}


export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    this.viewHouses()
    console.log('Houses controller loaded', ProxyState.houses);
  }

  viewHouses() {
    let form = getHouseForm()
    // console.log(form);
    document.getElementById('form-body').innerHTML = form
    _drawHouses()
  }

  createHouse() {
    // NOTE prevent default keeps the form submit event from reloading the page
    window.event.preventDefault()
    let form = window.event.target
    console.log('form submitted', form);
    // NOTE controller will collect all the information from the form...
    // NOTE the red underlines between form and value are ok
    let houseData = {
      style: form.style.value,
      color: form.color.value,
      year: form.year.value,
      rooms: form.rooms.value,
      bathrooms: form.bathrooms.value,
      squareFootage: form.squareFootage.value,
      lotSize: form.lotSize.value,
      price: form.price.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value,
    }
    console.log('the new car', houseData);
    // ... and pass it to the service
    housesService.createHouse(houseData)
    form.reset()
    // NOTE don't look at boostrap docs they give a way that doesn't work as good look at this
    // it's best to close the modal here once the method is complete, closing it with the button click will not work later when things get more complicated
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

  deleteHouse(id) {
    console.log('deleting house', id);
    housesService.deleteHouse(id)
  }
}