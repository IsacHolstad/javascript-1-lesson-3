const pet = {
    type: "pig",
    color: "#ff0000",
    age: 0,
    isPetFriendly: true,
    name: "Benny",
};

// 1. Select the pet detail dom element by class
const petDetail = document.querySelector(".pet-detail");


// 3. play with friendly value


// pet.isFriendly === false
// 4.  check pet is friendly or not

// 5. use the colour in a variable
// 2. change the innerHTML of the pet details
const myPetColor = pet.color
const myPetType = pet.type
const myPetAge = pet.age > 0 ? pet.age : "information not avalibal at the moment";
const myPetIsFriendly = pet.friendly
const myPetName = pet.name

console.log(petType);
console.log(petColor);
console.log(petAge);
console.log(petIsPetFriendly);
console.log(petName);


petDetail.innerHTML = `
<h4>type of pet: ${myPetType}</h4>
<p>Age: ${myPetAge}</p>
<p>friendlt: ${isPetFriendly ? "yes" : "no}</p>
´