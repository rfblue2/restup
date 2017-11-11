module.exports = function(app) {
  var pets = require('../controllers/petsController')

  app.route('/pets')
    .get(pets.list_pets)
    .post(pets.create_pet)
    
  app.route('/pets/:petId')
    .get(pets.get_pet)
}