const letters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
const syms = '!@#$%^&*_-+=';
const nums = '0123456789';

const createDummyString = (length, symbols, numbers) => {
    const lettersLength = length - symbols - numbers;
    let characters = '';
    // get random symbols based on number requested
    for( let i = 0; i < symbols; i++) {
        characters += syms.charAt(Math.floor(Math.random() * syms.length));
    }
    // get random numbers based on number requested
    for( let i = 0; i < numbers; i++) {
        characters += nums.charAt(Math.floor(Math.random() * nums.length));
    }
    // get letters based on total left after numbers and symbols subtracted
    for( let i = 0; i < lettersLength; i++) {
        characters += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    console.log(characters);
    return characters
}

const createPasswords = (length, symbols, numbers) => {
    let chars = createDummyString(length, symbols, numbers);
    return generatePassword(length, chars); 
}
// using fisher-yates shuffle to randomize password sequence
const generatePassword = ( length, chars) => {
    let chosenCharacters = chars;
    let shuffle = [...chosenCharacters];
    const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);
    shuffle.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );
    shuffle = shuffle.join('');
    let password = shuffle;
    // console.log(`shuffle ${shuffle}`);
    // console.log(`password ${password}`);
    return password;
}
module.exports = createPasswords;