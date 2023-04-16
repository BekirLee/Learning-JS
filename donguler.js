// for(let n=1;n<=10;n++){
//     console.log(n)
// }

let sum=0;

let numbers=[1,2,3,4,6,7,3,53,6];

for (let number of numbers){
sum += number;
}

console.log(sum);

let users={
    "name":"NIhad",
    "surname":"Bakirli",
    "home":"Sheki",
    "email":"nihadbeirli8@gmail.com"

};

for (let key in users){
    console.log(users[key]);
}

