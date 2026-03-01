function reverseBits(n) {
    const nBinary = n.toString(2).padStart(32, '0')
    const reversed = nBinary.split("").reverse().join("")
    const result = parseInt(reversed, 2)
    return result >>> 0
};



console.log(reverseBits(43261596))