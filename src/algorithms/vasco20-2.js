function minSubArrayLen (target, nums) {
    const n = nums.length 
    let prefixSum = new Array(n + 1).fill(0)
    const deque = []
    deque[0] = 0
    let minLength = n + 1
    for (let i = 0; i < n; i++){
        prefixSum[i + 1] = prefixSum[i] + nums[i]
    }
    console.log(prefixSum)
    for(let i = 1; i < prefixSum.length; i++){
        while(prefixSum[i] - prefixSum[deque[0]] >= target){
            minLength = Math.min(minLength, i - deque[0])
            deque.shift()
        }
        while(prefixSum[i] <= prefixSum[deque[deque.length - 1]]){
            deque.pop()
        }
        
        deque.push(i)
    }

    return minLength <= n ? minLength : 0
};

console.log(minSubArrayLen(5, [2, 2, -3, 1, 4]
))