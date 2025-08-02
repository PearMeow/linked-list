import LinkedList from "./linked-list.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.removeAt(3);

console.log(list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> ( snake ) -> ( turtle ) -> null

list.insertAt("hello", 3);

console.log(list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hello ) -> ( snake ) -> ( turtle ) -> null

list.pop();
console.log(list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hello ) -> ( snake ) -> null

list.prepend("meow");

console.log(list.toString());
// ( meow ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hello ) -> ( snake ) -> null

console.log(list.at(3).value);

console.log(list.find("cat").value);

if (list.contains("cat")) {
    console.log("yep cat");
} else {
    console.log("nope cat");
}

if (list.contains("kasdjkflasjklfj")) {
    console.log("yep kaswhatever");
} else {
    console.log("nope");
}
