const ServerError = require('../../lib/error');
/**
 * @param {Object} options
 * @param {String} options.id User unique id
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getUserById = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'getUserById ok!'
  };
};

/**
 * @param {Object} options
 * @param {String} options.id User unique id
 * @param {Object} options.userData Updated user object
 * @throws {Error}
 * @return {Promise}
 */
module.exports.putUserById = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'putUserById ok!'
  };
};

