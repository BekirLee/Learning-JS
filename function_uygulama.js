// function writeword(word, time) {
//     for (let i = 0; i < time; i++) {
//         console.log(word);
//     }
// }

// writeword("Salam",3);


// kvadrat

// let sahe1 = 1;
// let p = 1;
// function sahe(number) {
//     for (let i = 0; i < 2; i++) {
//          sahe1 *= number;
//     }

//     p = 4 * number;

//     console.log(sahe1,p);
// }

// sahe(4);


// yazi tura

// function yazi_tura() {
//     let random = Math.random();
//     console.log(random);
// }

// yazi_tura();
// yazi_tura();
// yazi_tura();


// function eded(number) {
//     let say = 0;
//     let sayilar=[];
//     for (let i = 1; i <= number; i++) {
//         if (number % i == 0) {
//             say++;
//             sayilar.push(i);
//         }

//     }
//     console.log(sayilar);
// }

// eded(6);


function toplam() {
    let cem = 0;
    for (let i = 0; i < arguments.length;i++) {
        cem += arguments[i];
        
    }
    console.log(cem);
}

toplam(2,3,4);
toplam(2,3,5,4);
toplam(2,3,4,6,4);
