/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const map = new Map()
    let left = 0
    let maxLength = 0
    
    for(let right = 0; right < s.length; right++){
        const char = s[right]
        if(map.has(char)){
            const ultimoIndice = map.get(char)
            left = Math.max(left, ultimoIndice + 1)
        }
        map.set(char, right)
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength

};

console.log(lengthOfLongestSubstring('abcabcbb'))