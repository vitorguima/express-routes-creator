const connection = require('../../connection/mongoConnection');
const updateExample = require('./dbUpdate');
const { db } = require('../../exampleDB');

const databaseMethods = {
  mongodb: {
    get: async (collection, databaseName) => await connection(databaseName)
      .then((db) => db.collection(collection).find().toArray()),
    getById: async (collection, identifier, databaseName) => await connection(databaseName)
      .then((db) => db.collection(collection).find(identifier).toArray()),
    post: async (collection, data, databaseName) => await connection(databaseName)
      .then((db) => db.collection(collection).insertOne(data)),
    put: async (collection, identifier, data, databaseName) => await connection(databaseName)
      .then((db) => db.collection(collection).updateOne(identifier, { $set: { ...data }})),
    delete: async (collection, identifier, databaseName) => await connection()
      .then((db) => db.collection(collection).deleteOne(identifier)),
  },
  db: {
    get: (tableName) => Object.values(db[tableName].DATA),
    getById: (tableName, identifier) => db[tableName].DATA[identifier],
    post: '',
    put: (tableName, identifier, data) => updateExample(tableName, identifier, data),
    delete: '',
  },
}

module.exports = databaseMethods;
