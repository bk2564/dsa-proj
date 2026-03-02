function twoSum(nums, target) {
    const map = new Map()

    for(let i = 0; i < nums.length; i++){
        const complemento = target - nums[i] 
        if(map.has(complemento)){
            return [map.get(complemento), i]
        }
        map.set(nums[i], i)
    }
};
