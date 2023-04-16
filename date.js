let n = new Date();

date = n;
// date = n.getDate();
// date = n.getDay();
// date = n.getUTCDay();
// date = n.getHours();

let day = new Date(1990, 5, 15);

result = date.getFullYear() - day.getFullYear();

let millisecond = date - day;

console.log(millisecond);
let full = millisecond / 86400000;


console.log(full);


