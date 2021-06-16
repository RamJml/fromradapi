/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get user by user name
*
* username String The name that needs to be fetched. Use user1 for testing.
* returns User
* */
const getUserByName = ({ username }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        username,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Logs out current logged in user session
*
* no response value expected for this operation
* */
const logoutUser = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* check user is exist or not
* check user is exist or not
*
* username String user name for login
* password String password for login
* returns String
* */
const showUserLogin = ({ username, password }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        username,
        password,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getUserByName,
  logoutUser,
  showUserLogin,
};
