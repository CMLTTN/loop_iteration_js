// //? ===============================================
// //?           DIZI ERISIM METOTLARI
// //? ===============================================

console.log("**** ACCESS ****")
const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1","22"]

// //* includes()
// //*-----------------------------------------------------------
console.log(numbers.includes("4"));
console.log(numbers.includes(4));

// //* indexOf(), lastIndexOf();
// //*-----------------------------------------------------------
// //* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.
console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf("22"));
console.log(numbers.lastIndexOf("111"));

// //* join()
// //*-----------------------------------------------------------
// //? join, dizinin elamanlari birlestirip string'e cevirir.
const strNumbers = numbers.join(" &#")
console.log(strNumbers);
let data = [3,5,8,9,7,446,56,4,11,2,32,625,57]
data = data.sort((a, b) => b - a ).join(" ")
console.log(data);


// //* toString()
// //*-----------------------------------------------------------
// //? toString fonksiyonu sadece dizinin elemanlarinin aralarina
// //? (virgul) koyarak birlestirir ve string yapar.
console.log(numbers.toString());
// //* slice(start, end) -- end exclusive
// //*-----------------------------------------------------------
const cars = ["bmv","toyota","fiat", "togg"]
console.log(cars.slice(2,4));
console.log(cars.slice(3));
console.log(cars);
const newCars = cars.slice(3,4)
console.log(newCars, cars);

// //* concat()
// //*-----------------------------------------------------------

const message = ["The", "weather", "is", "very", "nice"]
const now = [new Date().toLocaleString()]
console.log(now);//? ['05.01.2023 09:33:01'
const concattedMsg = message.concat(now,"JS Arrays",["1,2,3,4,"])  
 
console.log(concattedMsg);




// //* ============================================
// //*                FOR LOOP
// //* ============================================

// // console.log("******* LOOPS IN ARRAYS ******")
const grades = [55,77,23,89,100,58,74]
let sum = 0
for (let i = 0; i < grades.length; i++){
    
     sum += grades[i]
}
     console.log((sum/grades.length).toFixed(2));

// // console.log(sum / grades.length).toFixed(2);

let negatives =[]
let positives =[]
const arr = [-5, 15, 22, -4, 45, 78]
for (let j = 0;j<arr.length;j++){
    if(arr[j] < 0 ){
negatives.push(arr[j])
    }else
positives.push(arr[j])
}
console.log(negatives);
console.log(positives);
console.log(arr);
 

// //* =========================================
// //*             FOR-IN LOOP
// //* =========================================
// const cars1 = ["bmv","togg","toyota","togg","fiat","bmv","bmv"]
// findCar = (cars1) =>{
// for(let i in cars1)



// //* =========================================
// //*            FOR-OF LOOP
// //* =========================================
const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"]
const findStudent = (name)=>{
    let counter= 0
    for(let i in students){
        if(name ===students[i]){
            counter++
        }
    }
if(counter===0){
    return`${name} can not be found`
}else{
    return`${name} found ${counter} times`

}
}

console.log(findStudent("mehmet"));
console.log(findStudent("ahmet"));
console.log(findStudent("cem"));
console.log(findStudent("ali"));

const findStudentForOf = (name)=> {
    let counter = 0 
    for(let student of students){
       student === name.toLowerCase() ? counter++ :null
       student ===name.toLowerCase()&& counter++
   }

return !counter 
?`${name} can not be found`
:`${name} found ${counter} times`

}
console.log(findStudentForOf("mehmet"));
console.log(findStudentForOf("ahmet"));
console.log(findStudentForOf("cem"));
console.log(findStudentForOf("ali"));



