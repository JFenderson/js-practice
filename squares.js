let oranges = [];

for (let i = 1; i < 101; i++) {
    oranges.push(i);
}
let divBy3 = [];
let divBy5 = [];
let divBy3and5 = [];
let not = [];

oranges.forEach((orange) => {
    if (orange % 3 === 0) {
        divBy3.push(orange);
    }else if (orange % 5 === 0) {
        divBy5.push(orange);
    }else if (orange % 5 === 0 && orange % 3 === 0) {
        divBy3and5.push(orange);
    }else {
        not.push(orange);
    }
});

console.log(divBy3and5)
console.log(divBy3);
console.log(divBy5)