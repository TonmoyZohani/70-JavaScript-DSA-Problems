function wordFrequencyCounter(str) {
  const strArr = str.toLowerCase().split(" ");
  const map1 = new Map([]);

  for (const item of strArr) {
    let cnt = map1.get(item) || 0;
    cnt++;
    map1.set(item, cnt);
  }

  return map1;
}

console.log(
  wordFrequencyCounter(
    "The quick quick brown fox jumps over the lazy dog the quick quick"
  )
);
