function yas(greet) {

    console.log(greet);
}

// yas("hello");
// yas("selam");
// yas("merhaba");

// ysi hesablamaq ucun function

// function history(day) {
//     console.log(new Date().getFullYear() - day);
// }

// history(1879);
// history(1987);

// function time(day) {
//     console.log(new Date().getFullYear() - day);
// }

// time(1890);
// time(1990);


function qocaliq(day, ad) {

    let yas =  qocaliq(day);
    console.log(new Date().getFullYear-day);
    let kaldi = 65 - yas;

    if (kaldi > 0) {
        console.log(`${ad} bey sizin pensiyaner olamaginiza ${kaldi} il kalib`);
    }
    else {
        console.log("Siz pensianersiz !");
    }

}
qocaliq(1980, "Ahmad");
