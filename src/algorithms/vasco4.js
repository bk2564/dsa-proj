function twoSum(nums, target) {
    const map = new Map()

    for(let i = 0; i < nums.length; i++){
        const complemento = target - nums[i] 
        console.log(map)
        if(map.has(complemento)){
            return [map.get(complemento), i]
        }
        map.set(nums[i], i)
    }
};

console.log(twoSum([2,7,11,15], 18))