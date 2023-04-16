let numbers = [1, 3, 4, 6, 5, 7, 2, 12, 2, 5, 4];

// for (let i of numbers){
//     console.log(i*i*i);
// }


// for (let i of numbers){
//     if(i%5==0){
//         console.log(i);
//     }
// }



// let sum=0;


// for(i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         console.log(numbers[i]);
//          sum+=numbers[i];
//     }


// }
// console.log(sum);



let products = ["iphone 12", "samsung s22", "iphone 13", "samsung s23", "samsung s23", "samsung s23"];

// for (let product of products){
//     console.log(product.toUpperCase());
// }

// let number = 0;
// for (let product of products) {
//     if(product.includes("samsung"))
//     {
//          number++;

//      }

// }


// console.log(number);

let ort = 0;

let students = [
    { "ad": "Nihad", "soyad": "Bakirli", "bal": [70, 60, 90] },
    { "ad": "Amil", "soyad": "Qarayev", "bal": [60, 90, 70] },
    { "ad": "Ahmad", "soyad": "Selimov", "bal": [80, 40, 80] }
]

for (let student of students) {
    let xal = 0;
    let eded=0;
    for (let ballar of student.bal) {
        xal += ballar;
        eded++;
    }
    ort = xal / eded;

    console.log(`${student.ad} ${student.soyad} adinda olan sagirdin ortalamsi : ${xal}`);

    


}