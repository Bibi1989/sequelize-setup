import db from "../database/models/index";
import { Op } from "sequelize";

export const getAllBooks = async () => {
  try {
    return await db.Book.findAll();
  } catch (error) {
    return error.message;
  }
};

export const getABook = async (id) => {
  try {
    return await db.Book.findOne({
      where: { id: Number(id) },
    });
    // const oneBook = await db.Book.findAll({
    //   where: { [Op.or]: [{ id: Number(id) }, { price: "#2000" }] },
    // });
  } catch (error) {
    return error.message;
  }
};

export const addBook = async (book) => {
  try {
    return await db.Book.create(book);
  } catch (error) {
    return error.message;
  }
};

export const updateBook = async (book, id) => {
  const found = await db.Book.findOne({ where: { id: Number(id) } });
  try {
    if (found) {
      const updatedBook = await db.Book.update(book, {
        where: { id: Number(id) },
      });
      if (updatedBook) return book;
    }
  } catch (error) {
    return error.message;
  }
};

export const deleteBook = async (id) => {
  const found = await db.Book.findOne({ where: { id: Number(id) } });
  try {
    if (found) {
      return await db.Book.destroy({
        where: { id: Number(id) },
      });
    }
  } catch (error) {
    return error.message;
  }
};
