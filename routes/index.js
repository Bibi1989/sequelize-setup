import { Router } from "express";
import {
  getAllBooks,
  addBook,
  updateBook,
  getABook,
  deleteBook,
} from "../controllers/bookcontroller";
import { bookValidation } from "../validation/bookvalidation";

// import BookQuery from "../controllers/BookControllerWithClass";

const router = Router();

router.get("/", async (_req, res, _next) => {
  const books = await getAllBooks();
  res.json({ books });
});

router.get("/:singleID", async (req, res, _next) => {
  const book = await getABook(req.params.singleID);
  res.json({ book });
});

router.post("/", async (req, res, _next) => {
  const { error, body } = bookValidation(req.body);
  if (error.length > 0) return res.status(400).json({ error });
  const addedBook = await addBook(body);
  res.json({ addedBook });
});

router.patch("/:upID", async (req, res, _next) => {
  const updatedBook = await updateBook(req.body, req.params.upID);
  res.json({ updatedBook });
});

router.delete("/:deleteID", async (req, res) => {
  const deletedBook = await deleteBook(req.params.deleteID);
  res.json({
    deletedBook:
      deletedBook === 1 ? "Deleted successfully!!!" : "Book not found",
  });
});

export default router;
