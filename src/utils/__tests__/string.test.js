import { getAllWords } from '../string';

describe('String util', () => {
  describe('getAllWords', () => {
    it('should break long string to words', () => {
      const longString = ' This is Crealytics test ';
      expect(getAllWords(longString)).toEqual(['This', 'is', 'Crealytics', 'test']);
    });

    it('should handle empty input', () => {
      expect(getAllWords(null)).toEqual([]);
    });
  });
});