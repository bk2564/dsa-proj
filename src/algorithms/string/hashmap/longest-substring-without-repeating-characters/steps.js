export function getSteps(s) {
    const map = new Map();
    const steps = []
    let start = 0;
    let maxLength = 0;

    steps.push({
        action: "original-string",
        string: [...s],
        start: start,
        map: new Map(map),
        maxLength: maxLength,
        text: "This is the original string. We will iterate through it to find the longest substring without the repeating characters.",
    });
    
    for (let end = 0; end < s.length; end++) {
        steps.push({
            action: "iteration-start",
            string: [...s],
            start: start,
            map: new Map(map),
            maxLength: maxLength,
            end: end,
            text: `Starting iteration ${end + 1}`,
        });
        const char = s[end];
        steps.push({
            action: "character-check",
            string: [...s],
            start: start,
            currentChar: char,
            map: new Map(map),
            maxLength: maxLength,
            end: end,
            text: `Checking if the current character [${char}] is in the map.`,
        });
        if (map.has(char)) {
            const lastIndex = map.get(char);
            start = Math.max(start, lastIndex + 1);
            steps.push({
                action: "character-is-in-map",
                string: [...s],
                start: start,
                currentChar: char,
                map: new Map(map),
                maxLength: maxLength,
                lastIndex: lastIndex,
                end: end,
                text: `The current character [${char}] is in the map. Updating the start index to the value found in the map with the key [${char}] plus 1.`,
            });
        } else{
            steps.push({
                action: "character-not-in-map",
                string: [...s],
                start: start,
                currentChar: char,
                map: new Map(map),
                maxLength: maxLength,
                end: end,
                text: `The current character [${char}] is not in the map.`,
            });
        }
        map.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
        steps.push({
            action: "update-map",
            string: [...s],
            start: start,
            currentChar: char,
            map: new Map(map),
            maxLength: maxLength,
            end: end,
            text: `Updating the map, at the key [${char}] to the end index (last seen occurence of the character) and updating the max length to the maximum value between itself and the size of the current window of characters [end - start + 1].`,
        });
    }
    steps.push({
        action: "result",
        string: [...s],
        map: new Map(map),
        maxLength: maxLength,
        returnValue: maxLength,
        text: `The maximum length found is ${maxLength}. Returning it.`,
    });
    
    return steps;
}
