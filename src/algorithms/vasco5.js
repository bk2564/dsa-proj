function findMedianSortedArrays(nums1, nums2) {
    const result = [...nums1, ...nums2].sort((a, b) => a - b)
    const i = Math.round(result.length / 2) - 1
    if(result.length % 2 == 0) return (result[i] + result[i + 1]) / 2
    return result[i]
};

console.log(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17]))