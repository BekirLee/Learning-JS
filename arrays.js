let first = ["NIhad", "Amil", "Ramil", "Eli"];
let second = ["BMW", "Mercedes", "Audi"];
let third = ["Kamaz", "Gemi", "Qatar"];
result = first.toString();
// result=first.join("-");

// result=first.shift(1);
// result=first.unshift("salam");
// result=first.push("hello");
// result=first.pop("hello");

// result = first.concat(second, third);
result=first.splice(1,0,"second");






console.log(result);
console.log(first);

