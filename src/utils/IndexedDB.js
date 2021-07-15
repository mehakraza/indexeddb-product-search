import Dexie from 'dexie';

const getAllWords = text => {
  if (!text) return '';

  const allWordsIncludingDups = text.split();
  const wordSet = new Set();
  allWordsIncludingDups.forEach(word => wordSet.add(word));
  return Array.from(wordSet);
}

const initiateDB = () => {
  const db = new Dexie('Crealytics');

  db.version(1).stores({
    products: '++id,title,gtin,*titleWords,price,price_currency,sale_price,sale_price_currency,on_sale,gender,image_link,additional_image_link',
  });

  // Add hook to index "title" for full-text search:
  db.products.hook('creating', (primKey, obj) => {
    obj.titleWords = getAllWords(obj.title);
    const price = obj.price ? obj.price.split(' ') : [0, 'EUR'];
    obj.price = price[0];
    obj.price_currency = price[1];
    const salePrice = obj.sale_price ? obj.sale_price.split(' ') : [0, 'EUR'];
    obj.sale_price = salePrice[0];
    obj.sale_price_currency = salePrice[1];
    obj.on_sale = +obj.price > +obj.sale_price;
  });

  return db;
}

export const populateDB = async data => {
  const db = initiateDB();

  const count = await db.products.count();
  if (count > 0) return Promise.resolve();

  db.open();

  return db.transaction('rw', db.products, () => {
    // Add products
    db.products.bulkAdd(data);
  }).catch(e => {
    console.log('Error populating DB:', e.stack || e);
  });
};
