import db from './db';
import { PAGE_SIZE  } from './constants';

/**
 * Marks DB populate operation COMPLETE
 * @returns {Promise}
 */
export const markPopulated = async () => {
  return db.transaction('rw', db.isPopulated, () => {
    db.isPopulated.add(new Date());
  });
};

/**
 * Checks if DB should be populated (condition: NOT already populated)
 *  @returns {Promise} which returns boolean
 */
export const shouldPopulate = async () => {
  const count = await db.isPopulated.count();
  return count === 0;
};

/**
 * Populates the DB with provided data
 * @param {Object[]} data
 * @returns {Promise}
 */
export const populateDB = async data => {
  db.open();

  return db.transaction('rw', db.products, () => {
    // Add products
    db.products.bulkAdd(data);
  }).catch(e => {
    console.log('Error populating DB:', e.stack || e);
  });
};

/**
 * Searches the DB for matching products
 * @param {string} searchTerm
 * @param {string} gender
 * @param {boolean} onSale
 * @param {number} pageNum
 * @returns {Promise} which returns Object[]
 */
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
