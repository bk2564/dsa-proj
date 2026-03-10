function reverse(x) {
    let negative = false
    if(x < 0) negative = true
    const stringX = Math.abs(x).toString()
    const reversed = Number(stringX.split("").reverse().join(""))
    const upperLimit = 2 ** 31 - 1
    const lowerLimit = 2 ** 31 * -1
    if (reversed > upperLimit || reversed < lowerLimit) return 0
    if(negative) return reversed * - 1
    return reversed
};

console.log(reverse(-120))