const palindromes = (str) => {
    const lowerCase = str.toLowerCase();
    const lettersOnly = lowerCase.replace(/()[^A-Z]/gi, '');
    const reverseString = lettersOnly.split("").reverse().join("");
    if (lettersOnly == reverseString) {
        return true;
    } else {
        return false;
    }
}
module.exports = palindromes
