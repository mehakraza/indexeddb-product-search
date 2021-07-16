import Dexie from 'dexie';

const getAllWords = text => {
  if (!text) return '';

  const allWordsIncludingDups = text.split(' ');
  const wordSet = new Set();
  allWordsIncludingDups.forEach(word => wordSet.add(word));
  return Array.from(wordSet);
}

const db = new Dexie('Crealytics');

db.version(1).stores({
  products: '++id,*titleWords,gender,on_sale',
});

// Add hook to index "title" for full-text search:
db.products.hook('creating', (primKey, obj) => {
  obj.titleWords = getAllWords(obj.title);
  if (obj.gender && obj.gender.toLowerCase) obj.gender = obj.gender.toLowerCase();
  [obj.price, obj.price_currency] = obj.price ? obj.price.split(' ') : [0, 'EUR'];
  [obj.sale_price, obj.sale_price_currency] = obj.sale_price ? obj.sale_price.split(' ') : [0, 'EUR'];
  obj.on_sale = +obj.price > +obj.sale_price;
});

export default db;
