


console.log("LEVEL_1_1_!");
console.log(Math.PI);
const PI = Math.PI;
roundedPI = PI.toFixed(2);
console.log(roundedPI);

console.log("LEVEL_1_2_!");
let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];
const roundRound = () => {
    for (let i = 0; i < array.length; i++) {
        console.log(Math.round(array[i]));
    }
};
roundRound();


console.log("LEVEL_1_3_!");
let randomNum = Math.random();
console.log(randomNum);
let randomNum1_10 = Math.random() * 10;
console.log(randomNum1_10);
let randomNum1_100 = Math.random() * 100;
console.log(randomNum1_100);

console.log("LEVEL_1_4_!");

let mini = Math.min(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488
);
let maxi = Math.max(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488
);
console.log(mini);
console.log(maxi);