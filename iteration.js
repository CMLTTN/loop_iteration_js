
const prices =[100,75,85,96,55]

for (let price of prices){
    console.log();

}
prices.forEach( (price) => console.log(price))
prices.forEach((p)=> console.log(p))
let sum1 = 0
prices.forEach((price)=>(sum1+= price))
console.log("SUM:",sum1);

let total = 0
prices.forEach((p,i, arr)=> {
total += p
console.log(`${i +1}.iteration: ${total}`);
arr[i] = Math.trunc(p *1.1) 
})
console.log(prices);



// // let sum= 0
// // prices.forEach(price=>(sum +=price))
// // console.log(sum);

// // let total = 0
// // prices.forEach((p,i)=> {
// //     total += p 
// //     console.log(`${i+1}.iteration: ${total}`)
// //     arr[i] = Math.trunch(p * 1.1)
// // })
// // console.log(prices);

// // let total = 0
// // prices.forEach((p, i, arr) => {
// //   total += p
// //   console.log(`${i + 1}.iteration: ${total}`)
// //   arr[i] = Math.trunc(p * 1.1)
// // })

// // console.log(prices)

// // //* =======================================
// // //*            MAP METHOD
// // //* =======================================
// // //?-------------- ÖRNEK -------------------
// // //? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]
const upperNames = names.map((name)=> name.toLocaleUpperCase())
console.log(upperNames);
console.log(names);
// console.log(names.map((name) => n.toLocaleUpperCase()))

const euro = 18.23
const dolar = 18.19
const tlPrices = [100, 150, 100, 50, 80]

const euroPrices = tlPrices.map((tl)=>Number((tl/euro).toFixed(2)))
const dolarPrices = tlPrices.map((tl)=>Number((tl/euro).toFixed(2)))
console.log(euroPrices,dolarPrices);

// //* =======================================
// //* =======================================
// //*            MAP METHOD
// //* =======================================

// //* =======================================
// //*          CHAINING (PIPELINE)
// //* =======================================

// //* =======================================
// //*             FILTER METHOD
// //* =======================================

// //* =======================================
// //*             REDUCE METHOD
// //* =======================================

// //* =======================================
// //*               OTHERS
// //* =======================================
