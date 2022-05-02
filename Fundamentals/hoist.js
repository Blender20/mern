console.log(hello); // logs undefined
var hello = "world"; // world

var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle); // magnet
}

var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan); // super cool

var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food); // half-chicken
  var food = "gone";
}

mean();
console.log(food);
var mean = function () {
  // TypeError mean is not a function
  food = "chicken";
  console.log(food); // chicken
  var food = "fish";
  console.log(food); // fish
};
console.log(food);

console.log(genre); // undefined
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre); //rock
  var genre = "r&b";
  console.log(genre); //r&b
}
console.log(genre); //disco

dojo = "san jose";
console.log(dojo); // san jose
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo); //seattle
  var dojo = "burbank";
  console.log(dojo); //burbank
}
console.log(dojo); // san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students; //{ name: 'Chicago', students: 65, hiring: true }
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now"; //dojo = "closed for now";
  }
  return dojo;
}
copy;
