import { Router } from "express";
import { getAllBooks, addBook } from "../controllers/bookcontroller";

const router = Router();

router.get("/", async function (_req, res, _next) {
  const bookObj = {
    title: "Book 2",
    description: "Love, romance and comedy",
    price: "#5000",
  };
  const book = await addBook(bookObj);
  res.json({ book });
});

router.get("/all", async function (_req, res, _next) {
  const books = await getAllBooks();
  res.json({ books });
});

export default router;
