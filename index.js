// Usage
// const myArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const shuffledArray = shuffle(myArray);
// console.log(shuffledArray);
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

module.exports = shuffle;
