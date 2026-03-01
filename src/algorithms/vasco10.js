function constructTransformedArray (nums) {
    const result = []
    const length = nums.length

    for(let i = 0; i < length; i ++){
        let key = (nums[i] + i) % length
        if(key < 0) key += length 
        result[i] = nums[key]
    }
    return result
};

console.log(constructTransformedArray([3,-2,1,1]))