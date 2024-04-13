const love = ['A new person will come', 'Be careful with companion', 'Maybe is time for adventures', 'Greats things coming soon'];
const luckyNumbers = [];
const job = ['Time for changes', 'You will have good news soon', 'You have to confront your boss', 'You deserve more'];

let numberGenerator = (num) => {
    let number = Math.floor(Math.random()*(num + 1));
    return number;
};

console.log(numberGenerator(5))
console.log(numberGenerator(5))
console.log(numberGenerator(5))
console.log(numberGenerator(5))
console.log(numberGenerator(5))
console.log(numberGenerator(5))
