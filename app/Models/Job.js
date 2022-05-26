import { generateId } from "../Utils/generateId.js"


export class Job {
  constructor(jobData) {
    // NOTE need id to have something unique on each car
    this.id = generateId()
    this.title = jobData.title
    this.description = jobData.description
    this.startingSalary = jobData.startingSalary
    this.color = jobData.color
    this.imgUrl = jobData.imgUrl
  }


  get Template() {
    return `
  <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" ">
      <img class="img-fluid" src="${this.imgUrl}" alt="">
      <h5 class="text-center">${this.title} | ${this.startingSalary}}</h5>
      <p>${this.description}</p>
      <input class="w-100" type="color" value="${this.color}">
      <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>
    `
  }
}