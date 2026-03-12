function minSubArrayLen (target, nums) {
    let left = 0
    let minLength = nums.length + 1
    let sum = 0

    for (let right = 0; right < nums.length; right++){
        sum += nums[right]

        while(sum >= target){
            minLength = Math.min(minLength, right - left + 1)
            sum -= nums[left]
            left++
        }
    }
    return minLength > nums.length ? 0 : minLength
};