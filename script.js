const love = ['A new person will come', 'Be careful with companion', 'Maybe is time for adventures', 'Greats things coming soon'];
const job = ['Time for changes', 'You will have good news soon', 'You have to confront your boss', 'You deserve more'];

let numberGenerator = (num) => {
    let number = Math.floor(Math.random()*(num + 1));
    return number;
};

const pickLove = () => {
    let i = numberGenerator(3);
    let pickedLove = love[i];
    return pickedLove;
};

const pickLuckyNumber = () => {
    let number = numberGenerator(98) + 1;
    return number;
};

const pickJob = () => {
    let i = numberGenerator(3);
    let pickedJob = job[i];
    return pickedJob;
};



