const fibonacci = function(int) {
    if (int < 0) {
        return 'OOPS';
    }
    let numberSequence = [1,1];
    let i = 0;
    do {
        numberSequence.push(numberSequence[numberSequence.length-1] + numberSequence[numberSequence.length-2]);
        i++;
    } 
    while (i < int); 
    return numberSequence[int-1];
}
module.exports = fibonacci
