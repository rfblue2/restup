
// Mocks

var id = 1;
var pets = [
  {
    id: 1,
    name: "Sam",
    species: "dog",
    toys: [
      "ball",
      "bone"
    ]
  }
]

exports.list_pets = (req, res) => {
  res.json(pets)
}

exports.create_pet = (req, res) => {
  var pet = req.body
  id = id + 1
  pet.id = id
  pets.push(pet)
  res.json(pet)
}

exports.get_pet = (req, res) => {
  for (var pet of pets) {
    if (pet.id === req.params.petId) res.json(pet)
  }
  res.send(`Error: No pet with id ${req.params.petId} found`)
}