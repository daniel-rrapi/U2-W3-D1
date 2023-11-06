class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
}

//2° esercizio
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

list = [];

const form = document.getElementById("pet");
const ul = document.getElementById("newUl");

form.onsubmit = (event) => {
  event.preventDefault();
  let petName = document.getElementById("petname").value;
  let ownerName = document.getElementById("owner").value;
  let species = document.getElementById("species").value;
  let breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  list.push(newPet);
  let li = document.createElement("li");
  li.innerText =
    newPet.petName +
    " " +
    newPet.ownerName +
    " " +
    newPet.species +
    " " +
    newPet.breed;
  ul.appendChild(li);
  console.log(list);
};
// console.log(list);
