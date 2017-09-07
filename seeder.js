import mongodb from 'mongodb';
import assert from 'assert';
import bcrypt from 'bcryptjs';
import userData from './userData';

const mongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/';


export default function seeder(data, model) {
  const insert = (database, callback) => {
    const collections = database.collection(model);

    collections.insertMany(data, (error, result) => {
      if (error) {
        // TODO: handle error
      } else {
        callback(result);
      }
    });
  };

  // Use connect method to connect to the server
  mongoClient.connect(url, (err, db) => {
    assert.equal(null, err);
    console.log('Connected successfully to server'); // eslint-disable-line

    insert(db, () => {
      db.close();
    });
  });
}
