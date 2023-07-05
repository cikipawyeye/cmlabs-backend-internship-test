// Declaring fizzBuzz function with 'start' & 'end' parameters.
const fizzBuzz = (start, end) => {

    // Check if the first number is greater than the last number.
    if (start >= end) {
        console.error('The first number must be greater than the last number');
        return;
    }

    for (let i = start; i <= end; i++) {
        if (i % 5 == 0 && i % 3 == 0) { // Check if the number is a multiple of 3 and 5.
            console.log('FizzBuzz');
        } else if (i % 3 == 0) { // Check if the number is a multiple of 3.
            console.log('Fizz');
        } else if (i % 5 == 0) { // Check if the number is a multiple of 5.
            console.log('Buzz');
        } else { // Displays number.
            console.log(i);
        }
    }
}

// call fizzBuzz function.
fizzBuzz(1, 100);