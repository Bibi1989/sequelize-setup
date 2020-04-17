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
  const singleID = req.params.singleID;
  if (isNaN(singleID))
    return res.status(404).json({ message: "Not a valid id" });
  const book = await getABook(singleID);
  if (book === null) return res.status(404).json({ message: "Book not found" });
  res.json({ book });
});

router.post("/", async (req, res, _next) => {
  const { error, body } = bookValidation(req.body);
  if (error.length > 0) return res.status(400).json({ error });
  const addedBook = await addBook(body);
  res.json({ book: addedBook, message: "Added Successfully!!!" });
});

router.patch("/:upID", async (req, res, _next) => {
  const upID = req.params.upID;
  if (isNaN(upID)) return res.status(404).json({ message: "Not a valid id" });
  const updatedBook = await updateBook(req.body, upID);
  if (updatedBook === undefined)
    return res.status(404).json({ message: "Book not found" });
  res.json({ book: updatedBook });
});

router.delete("/:deleteID", async (req, res) => {
  const deleteId = req.params.deleteID;
  if (isNaN(deleteId))
    return res.status(404).json({ message: "Not a valid id" });
  const deletedBook = await deleteBook(deleteId);
  if (deletedBook === undefined)
    return res.status(404).json({ message: "Book not found" });
  return res.json({
    message: "Deleted successfully!!!",
  });
});

export default router;
