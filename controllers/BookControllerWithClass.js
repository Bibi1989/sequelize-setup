import db from "../database/models/index";
import { Op } from "sequelize";

export default class BookQuery {
  static async getAllBooks() {
    try {
      return await db.Book.findAll();
    } catch (error) {
      return error.message;
    }
  }

  static async getABook() {
    try {
      return await db.Book.findOne({
        where: { id: Number(id) },
      });
    } catch (error) {
      return error.message;
    }
  }

  static async addBook() {
    try {
      return await db.Book.create(book);
    } catch (error) {
      return error.message;
    }
  }

  static async updateBook() {
    try {
      await db.Book.update(book, {
        where: { id: Number(id) },
      });
    } catch (error) {
      return error.message;
    }
  }
  static async deleteBook() {
    try {
      return await db.Book.destroy({
        where: { id: Number(id) },
      });
    } catch (error) {
      return error.message;
    }
  }
}
