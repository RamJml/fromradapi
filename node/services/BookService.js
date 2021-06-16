/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* add New Book in Store
*
* book Book 
* no response value expected for this operation
* */
const addNewbook = ({ book }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        book,
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
* delete book from store by bookId
*
* bookId Long 
* no response value expected for this operation
* */
const deleteBook = ({ bookId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        bookId,
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
* get all books from store
* retun all available books in store 
*
* returns List
* */
const getAllBooks = () => new Promise(
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
* upload Photo
* upload photo for book
*
* bookId Long 
* file File 
* returns List
* */
const uploadImage = ({ bookId, file }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        bookId,
        file,
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
  addNewbook,
  deleteBook,
  getAllBooks,
  uploadImage,
};
