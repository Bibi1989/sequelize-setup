import db from "../database/models/index";

export const getAllBooks = async () => {
  try {
    const books = await db.Book.findAll();
    return books;
  } catch (error) {
    return error.message;
  }
};

export const addBook = async (books) => {
  try {
    const book = await db.Book.create(books);
    return book;
  } catch (error) {
    return error.message;
  }
};
