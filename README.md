# shuffle-any-array

`shuffle-any-array` is a simple npm package that provides a function to shuffle any array you pass to it.

## Installation

You can install the package using npm:

```bash
npm install shuffle-any-array
```

## Usage

First, require the package in your project:

```javascript
const { makeShuffle } = require('shuffle-any-array');
```

### Example 1: Shuffling an array of numbers

```javascript
const shuffledArray = makeShuffle([5, 6, 1, 9, 4, 3, 4]);
console.log(shuffledArray);
```

### Example 2: Shuffling an array of objects

```javascript
const shuffledArray = makeShuffle([
    { id: 8, name: 'ressad' },
    { id: 6, name: 'sdfaf' },
    { id: 5, name: 'fgsd' },
]);
console.log(shuffledArray);
```

## Function

makeShuffle(array)
The makeShuffle function takes an array as input and returns a new array with its elements shuffled.

### Parameters

-   array (Array): The array to shuffle.
    Returns
-   Array: A new array with the elements shuffled.

## How It Works

The makeShuffle function uses the Array.prototype.sort() method with a comparator that randomly returns a positive or negative value to shuffle the elements of the array.

Here is the implementation of the function:

```javascript
function makeShuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Author

-   [@mohsensami](https://github.com/mohsensami)

## Contributing

If you want to contribute to this project and make it better, your help is very welcome. Create an issue or submit a pull request.
