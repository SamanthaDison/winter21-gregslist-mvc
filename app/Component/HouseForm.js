export function getHouseForm() {
    return `
  <form onsubmit="app.housesController.createHouse()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="address" class="form-label">Address</label>
      <input type="text" class="form-control" name="address" id="address" aria-describedby="address"
        placeholder="Address..." required>
    </div>
    <div>
      <label for="sqft" class="form-label">Sqft</label>
      <input type="number" class="form-control" name="sqft" id="sqft" aria-describedby="sqft"
        placeholder="Sqft..." required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="rooms" class="form-label">Rooms</label>
      <input type="number" class="form-control" name="rooms" id="rooms" aria-describedby="rooms"
        placeholder="Rooms..." min="1" required>
    </div>
    <div>
      <label for="bathrooms" class="form-label">Bathrooms</label>
      <input type="number" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="bathrooms"
        placeholder="Bathrooms..." min="1" required>
    </div>
    <div>
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
        placeholder="Price..." min='1' required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="imgUrl" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
        placeholder="Image Url..." required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control" name="description" id="description"
        aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">Create</button>
  </div>
</form>`


}