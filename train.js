/* E-TASK: 

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/


function getReverse(str) {
    if(typeof str === "string") {
        return str.split("").reverse().join("")
    } else {
        console.log("iltimos matn kiriting");
    }
}

console.log(getReverse('hello'));






/*TASK D : 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string 
bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
 */

// function checkContent(str1, str2) {

//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();

//     const checkStr1 = str1.split('').sort().join('');
//     const checkStr2 = str2.split('').sort().join('');

//         return checkStr1 === checkStr2;
// }


// console.log(checkContent('devex', 'xeved'));








/* Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot 
pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va 
biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 
4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() 
return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

*/


// const moment = require('moment');
// const time = moment().format("HH:mm");

// class Shop {

//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

//     qoldiq() {
//         console.log(`Hozir ${time}da Non ${this.non}ta, lagmon ${this.lagmon}ta, cola ${this.cola}ta mavjud!!!`);
//     }

//     sotish(productName, quantity) {
//         if(this[productName] !== undefined ) {
//             if(this[productName] >=  quantity) {
//                 this[productName] -= quantity
//                 console.log(`${time}da, ${productName} ${quantity}ta sotildi`);
                
//             } else {
//                 console.log(`Uzur ${time}da, ${productName} ${quantity}ta yetarli emas`);
//             }
//         } else {
//             console.log(`${productName} mahsuloti mavjud emas!!!`);
//         }
//     }

//     qabul(productName, quantity) {
//         this[productName] += quantity;
//         console.log(`${time}da, ${productName} ${quantity}ta qabul qilindi`);
        
//     }

// }
// // CALL
// const shop1 = new Shop(4, 1, 9);

// shop1.qoldiq();
// shop1.sotish('non', 1);
// shop1.sotish('olma', 1);







// TASK - B

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function countDigits(a) {
//     let count = 0;
//     for(let i = 0; i < a.length; i++) {
//         if(a[i] >= "0" && a[i] <= "9")
//             count++
//     }
//     return count;
// }
// console.log(countDigits("asdfiuq823rhn"));





// // TASK-A

// // Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni 
// // ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// // MASALAN countLetter("e", "engineer") 3ni return qiladi.

// function harfSon(letter, text) {
//         let harf = 0;
//         for(let i = 0; i < text.length; i++) {
//             if(text[i].toLowerCase() === letter.toLowerCase()) {
//                 harf++;
//             }
//         }
//         return harf;
//     }
//     console.log(harfSon('a', 'assalomu alekom'));

//     console.log("=====");








// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba bo'ling", // 0~20
//   "to'g'ri boshliq tanlang va koproq xato qiling", // 20~30
//   "o'zingizning ishlaringizni boshlang", // 30~40
//   "siz kuchli bo'lgan narsalarni qiling", // 40~50
//   "yoshlarga investitsiya qiling", // 50~60
//   "endi dam oling, foydasi yo'q endi", // 60
// ];

// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//         callback(null, list[5]);
//     }, 5000); 
//     }
// }

// // then/catch
// console.log("passed here 0");

// maslahatBering(61, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log('javob:', data);

//     }
// });

// console.log("passed here 1");


// // Asunchronous function

// async function maslahat(a) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return list[5];
        
        
//     }
// }


// // then/catch
// // console.log("passed here 2");
// // maslahatBering(65)
// //     .then((data) => {
// //         console.log("javob:", data);
// //     });
// //     .catch((err) => {
// //         console.log("ERROR:", err);
// //     });
// //     console.log("passed here 3");

//     //asyn/await

// async function run() {
//     let javob = await maslahat(20);
//     console.log(javob);
//     javob = await maslahat(31);
//     console.log(javob);
//     javob = await maslahat(42);
//     console.log(javob);
// }
// run();