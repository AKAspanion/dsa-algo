function canConstruct(ransomNote: string, magazine: string): boolean {
  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < ransomNote.length; i++) {
    map1.set(ransomNote[i], map1.get(ransomNote[i]) + 1 || 1);
  }
  for (let i = 0; i < magazine.length; i++) {
    map2.set(magazine[i], map2.get(magazine[i]) + 1 || 1);
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    const map1Len = map1.get(char) || 0;
    const map2Len = map2.get(char) || 0;
    if (map1Len > map2Len) return false;
  }

  return true;
}

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
console.log(canConstruct('ransomNote', 'magazine'));
