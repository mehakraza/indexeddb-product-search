import Dexie from 'dexie';

const db = new Dexie('Crealytics');

db.version(1).stores({
  products: '++id,*titleWords,gender',
  isPopulated: '++id',
});

export default db;
