function majorityElement(nums) {
    const map = new Map();
    let maxValue = -Infinity
    let maxKey = null;
    for(const x of nums){
        if (!map.has(x)){
            map.set(x, 1)
        } else{
            map.set(x, map.get(x) + 1)
        }
    }

    for(const [key, value] of map){
        if(value > maxValue){
            maxValue = value
            maxKey = key
        }
    }
    return maxKey
}


function majorityElement2(nums){
    let candidate = null
    let count = 0

    for(const x of nums){
        if(count === 0){
            candidate = x
        }
        count += candidate === x ? 1 : -1
    }
    return candidate
}

console.log(majorityElement2([2,3,3,4,2,1,2,3,4,2,1,2,1,32,32,32,32,32,32,32,32,32]))