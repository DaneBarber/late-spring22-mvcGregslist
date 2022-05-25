export function getHouseForm() {
  return `
  
  <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.housesController.createHouse()">
              <h3> List a House </h3>
                <div class="row">
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Style</label>
                    <input required type="text" name="style" id="style" placeholder="Enter a house style..." maxlength="15"
                      minlength="3" class="form-control" placeholder="" aria-describedby="helpId"
                      title="please enter a Style">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Rooms</label>
                    <input required type="number" name="rooms" id="rooms" placeholder="0"
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">bathrooms</label>
                    <input required type="number" name="bathrooms" id="bathrooms" placeholder="0"
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">squareFootage</label>
                    <input required type="number" name="squareFootage" id="squareFootage" placeholder="0"
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">lotSize</label>
                    <input required type="number" name="lotSize" id="lotSize" placeholder="0"
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Year</label>
                    <input required type="number" name="year" id="year" value="2000" min="1960" max="2023"
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Price</label>
                    <input required type="number" name="price" id="price" value="1" min="1" class="form-control"
                      placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-12 mb-2">
                    <label for="" class="form-label">description</label>
                    <input required type="text" name="description" id="description"
                      placeholder="Tell us about the house..." class="form-control" maxlength="75" placeholder=""
                      aria-describedby="helpId">
                  </div>
                  <div class="col-6">
                    <label for="" class="form-label">Image Url</label>
                    <input required type="text" name="imgUrl" id="imgUrl" class="form-control" placeholder=""
                      aria-describedby="helpId">
                  </div>
                  <div class="col-6">
                    <label for="" class="form-label">Color</label>
                    <input required type="color" name="color" id="color" class="form-control" placeholder=""
                      aria-describedby="helpId">
                  </div>
                </div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary px-3 py-2" title="create a house"><i
                    class="mdi mdi-plus"></i>
                  Create</button>
              </form>`
}