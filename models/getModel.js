const databaseMethods = require('../helpers/database_requests_methods/genericMethods');

async function getAll(options) {
  try {
    const list = await databaseMethods[options.database].get(options.collection)
    return list;
  } catch {
    return {
      err: {
        code: 'connection_fail',
        message: 'could not connect to the database',
      }
    }
  }
}

module.exports = getAll;