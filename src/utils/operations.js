import db from './db';

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

export const searchDB = async searchTerm => {
  db.open();

  // Search for products
  const matchingRows = await db.products.where('titleWords').startsWithIgnoreCase(searchTerm).distinct().toArray();
  return matchingRows;
};
