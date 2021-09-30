/////////////////////////////
////// CODEWARS KYU 7 //////
/////////////////////////////

// function disemvowel(str) {
//   return str.replace(/[aeiouAEIOU]/g, '');
// }

// console.log(disemvowel('This website is for losers LOL!'));

/////////////////////////////
///// CODEWARS KYU 6 (FIND THE ODD INT) //////
/////////////////////////////

// function findOdd(A) {
//     let counter = {}

//     for (let i = 0; i < A.length; i++) {
//         if (counter[A[i]]) {
//             counter[A[i]] += 1
//             // console.log(counter);
//         } else {
//             counter[A[i]] = 1
//             // console.log(counter);
//         }
//     }

//     for (let count in counter) {
//         if (counter[count] % 2 != 0) {
//             return Number(count)
//             }
//         }
//     }

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));