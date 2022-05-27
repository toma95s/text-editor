import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');
export const putDb = async (content) => {
  console.error('putDb not implemented');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readWrite');
  const store = tx.objectStore('jate');
  const request = store.put({id: 1, value: content });
  console.log(': rocket: - data saved to the database', result.value);
}; 
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');
console.error('getDb not implemented');
const jateDb = await openDB('jate', 1);
const tx = jateDb.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
const request = store.get(1);
const result = await request;
result
  ? console.log(':rocket: - data retrived from the database', result.value)
  : console.log(':rocket: - data not found in the database');
  return result?.value
}; 
initdb();
