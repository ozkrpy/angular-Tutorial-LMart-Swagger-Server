const ServerError = require('../../lib/error');
/**
 * @param {Object} options
 * @param {String} options.search Search text
 * @param {Integer} options.offset The number of items to skip before starting to collect the result set.
 * @param {Integer} options.limit The number of items to return.
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getUsers = async(options) => {
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
        data: [{
                id: "1",
                email: "mail@mail.com",
                name: { first: "nombre", middle: "segundo", last: "apellido" },
                picture: "foto",
                role: "clerk",
                userStatus: true,
                lastModified: "2019-01-01",
                lastModifiedBy: "usuario"
            },
            {
                id: "2",
                email: "mail@mail.com",
                name: { first: "nombre", middle: "segundo", last: "apellido" },
                picture: "foto",
                role: "clerk",
                userStatus: true,
                lastModified: "2019-01-01",
                lastModifiedBy: "usuario"
            }
        ]
    };
};