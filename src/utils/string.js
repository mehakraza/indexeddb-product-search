export const getAllWords = text => {
  if (!text) return [];

  const allWordsIncludingDups = text.trim().split(' ');
  const wordSet = new Set();
  allWordsIncludingDups.forEach(word => wordSet.add(word));
  return Array.from(wordSet);
}
