import { Router } from "express";
import db from "../database/models/index";

const router = Router();

router.get("/", async function (_req, res, _next) {
  const bookObj = {
    title: "Book 2",
    description: "Love, romance and comedy",
    price: "#5000",
  };
  try {
    const book = await db.Book.create(bookObj);
    res.json({ book });
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.get("/all", async function (_req, res, _next) {
  try {
    const books = await db.Book.findAll();
    res.json({ books });
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;
