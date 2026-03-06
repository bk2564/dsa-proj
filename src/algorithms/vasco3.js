function countDistinctIntegers(nums) {
    const set = new Set()

    for(const x of nums){
        set.add(x)
        set.add(Number(x.toString().split("").reverse().join("")))
    }

    return set.size
};


console.log(countDistinctIntegers([1,13,13,10,12,31]))