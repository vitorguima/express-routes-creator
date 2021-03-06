const { ObjectId } = require('mongodb');
const databaseMethods = require('../helpers/database_requests_methods/genericMethods');

async function put(options, params, data) {
  const mongoIdSize = 24;
  const { collection, databaseName } = options;

  let updateParam = params[options.req.params];

  if (updateParam.length === mongoIdSize) {
    updateParam = { _id: ObjectId(params[options.req.params]) }
  }

  try {
    await databaseMethods[options.database].put(collection, updateParam, data, databaseName);
    return {
      _id: params,
    };
  } catch {
    return {
      err: {
        code: 'invalid_data',
        message: 'could not find any data with the specified params',
      }
    }
  }
}

module.exports = put;
