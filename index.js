// Usage
// const myArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const shuffledArray = shuffle(myArray);
// console.log(shuffledArray);

// function isWds(string) {
//     return string === 'WDS';
// }

// module.exports = isWds;

function makeShuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

module.exports = makeShuffle;
