function hasAlternatingBits(n) {
    const x = n ^ (n >> 1)
    return (x & (x+1)) === 0
};

console.log(hasAlternatingBits(11))