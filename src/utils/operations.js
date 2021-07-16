import db from './db';

export const PAGE_SIZE = 100;

export const populateDB = async data => {
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

export const searchDB = async (searchTerm = '', gender = '', onSale = false, pageNum = 1) => {
  db.open();

  // Search for products
  const searchWords = searchTerm.trim().split(' ');
  const matchingRows = await db.products
    .where('titleWords')
    .startsWithAnyOfIgnoreCase(searchWords)
    .and(obj =>
      (!onSale || obj.on_sale) &&
      (!gender || (obj.gender === gender.toLowerCase()))
    )
    .offset(PAGE_SIZE*pageNum)
    .limit(PAGE_SIZE)
    .distinct()
    .toArray();
  return matchingRows;
};
