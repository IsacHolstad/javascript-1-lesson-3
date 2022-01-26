const pet = {
    type: "pig",
    colour: "#ff0000",
    age: 0,
    isFriendly: true,
    name: "Benny",
};

// 1.select header h4
const heading = document.querySelector("h4");

// 2.select the .age class
const age = document.querySelector(".age");
// 3.select .friendly class
const friendly = document.querySelector(".friendly");

// 4.change the innerHTML of each of them with data from the object

heading.innerHTML = pet.type;
age.innerHTML = pet.age;
friendly.innerHTML = pet.isFriendly ? "this pet is friendly" : "this pet is not friendly";

