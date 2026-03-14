function lengthOfLongestSubstring(s) {
  const map = new Map();
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (map.has(char)) {
      const lastIndex = map.get(char);
      start = Math.max(start, lastIndex + 1);
    }
    map.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
