/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const piada = {
    name: "Piada",
    cuisines: ["Italian"],
    numberOfStars: 5,
    favorited: false,
};

console.log(piada);

piada.address = "1234 Street Name, City, State";
piada.zipcode = "12345";
piada.acceptsReservations = false;

console.log(piada);

piada.numberOfStars += 1;
piada.favorited = !piada.favorited;
piada.cuisines.push("Mediterranean");

console.log(piada);

function retrieveProperty(object, key) {
    if (object[key]) {
        return object[key];
    } else {
        return "The information you requested does not exist.";
    }
}

console.log(retrieveProperty(piada, "cuisines"));
console.log(retrieveProperty(piada, "favorited"));
console.log(retrieveProperty(piada, "name"));
console.log(retrieveProperty(piada, "nickName"));
console.log(retrieveProperty(piada, "state"));
