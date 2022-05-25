import { generateId } from "../Utils/generateId.js";


export class House {
  constructor(data) {
    this.id = generateId()
    this.style = data.style
    this.color = data.color
    this.year = data.year
    this.rooms = data.rooms
    this.bathrooms = data.bathrooms
    this.squareFootage = data.squareFootage
    this.lotSize = data.lotSize
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description
  }

  get Template() {
    return `
  <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" ">
      <img class="img-fluid" src="${this.imgUrl}" alt="">
      <h5 class="text-center">${this.rooms} rms | ${this.style} | ${this.year}</h5>
      <h4 class="text-center">$${this.price}</h4>
      <p>${this.description}</p>
      <input class="w-100" type="color" value="${this.color}">
      <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>
    `
  }
}