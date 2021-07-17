import db from './db';
import { PAGE_SIZE  } from './constants';

export const markPopulated = async () => {
  return db.transaction('rw', db.isPopulated, () => {
    db.isPopulated.add(new Date());
  });
};

export const shouldPopulate = async () => {
  const count = await db.isPopulated.count();
  return count === 0;
};

export const populateDB = async data => {
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
      (!onSale || obj.onSale) &&
      (!gender || (obj.gender === gender.toLowerCase()))
    )
    .offset(PAGE_SIZE*pageNum)
    .limit(PAGE_SIZE)
    .distinct()
    .toArray();

  return matchingRows;
};
