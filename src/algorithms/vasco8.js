    function findValidPair (s) {
        const nums = s.split("")
        const map = new Map()
        for(const x of nums){
            if(map.has(x)){
                map.set(x, map.get(x) + 1)
            }
            else map.set(x, 1)
        }


        for(let i = 0; i < s.length; i++){
            const a = s[i]
            const b = s[i + 1]

            if(a !== b && map.get(a)
            && map.get(b)) return a + b
        }

        return ""
    }

console.log(findValidPair("2523533"))