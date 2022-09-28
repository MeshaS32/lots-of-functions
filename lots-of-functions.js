
/*
function name - say Hi
parameters: nameStr - string

return string

concatenation
interpolation

*/

// // function sayHi(name){
// //     let newStr = `Hi, ${name}`;
// //     return newStr
// // }
// // console.log(sayHi("Kamesha"));
// // console.log(sayHi("Jimmy"))
// // console.log(sayHi("Adira"))

// function bigString(str1, str2){
//     if(str1.length > str2.length){
//       return str1
//     } else if( str2.length > str1.length){
//     return str2
// } else if(str1.length === str2.length){
//     console.log(`${str1} is equal in length to ${str2}`)
// }
// }

// console.log(bigString("blue", "red"))
// console.log(bigString("twin", "red"))
// bigString("Two", "red")

// function bigNumber(num1, num2){
//     if(num1 > num2){
//         return num1
//     }else if(num2 > num1){
//         return num2
//     }else if(num1 === num2){
//         console.log(`${num1} is equal to ${num2}`)
//     }
// }
// console.log(bigNumber(200,100))
// console.log(bigNumber(100, 200))
// bigNumber(100,100)

/* function name: fiveMore
parameter- array of numbers
-add 5 to each number
loop
myArray.length

*/


//#4
// function fiveMore(myArray){

//     for(let i = 0; i < myArray.length; i++){

//     if(myArray[i] % 2 !== 0){
//         myArray[i] += 5
//     }
// }
//     return myArray;
// }
// console.log(fiveMore([1,2,3,4,]))

//#5

// function arraySummer(myArray2){
//     let sum = 0

//     for( let i2 = 0; i2 < myArray2.length; i2++){

//            sum += myArray2[i2]
//         }
    
//     return sum
// }
// console.log(arraySummer([1,2,3,4,6]))


/*#6

function name: everyDivisible
parameter: n - number les than 10


for loop= 0 to 100
if( number % n === 0)
print/ console.log(number)

*/

function everyDivisible(n){
    
    if(n < 10){

    for(let number = 1; number <= 100; number++){
        if(number % n === 0){
            console.log(number)
        }
    }
    }
}
everyDivisible(9)