import chai from "chai";
import chatHttp from "chai-http";
import "chai/register-should";
import app from "../app";

chai.use(chatHttp);
const { expect } = chai;

describe("Testing the book endpoints:", () => {
  it("It should create a book", (done) => {
    const book = {
      title: "First Awesome book",
      price: "$9.99",
      description: "This is the awesome book",
    };
    chai
      .request(app)
      .post("/api/books")
      .set("Accept", "application/json")
      .send(book)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.should.have.property("message").eql("Added Successfully!!!");
        done();
      });
  });

  it("It should not create a book with incomplete parameters", (done) => {
    const book = {
      price: "$9.99",
      description: "This is the awesome book",
    };
    chai
      .request(app)
      .post("/api/books")
      .set("Accept", "application/json")
      .send(book)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it("It should get all books", (done) => {
    chai
      .request(app)
      .get("/api/books")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.books[0].should.have.property("id");
        res.body.books[0].should.have.property("title");
        res.body.books[0].should.have.property("price");
        res.body.books[0].should.have.property("description");
        done();
      });
  });

  it("It should get a particular book", (done) => {
    const bookId = 1;
    chai
      .request(app)
      .get(`/api/books/${bookId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.book.should.have.property("id");
        res.body.book.should.have.property("title");
        res.body.book.should.have.property("price");
        res.body.book.should.have.property("description");
        done();
      });
  });

  it("It should not get a particular book with invalid id", (done) => {
    const bookId = 8888;
    chai
      .request(app)
      .get(`/api/books/${bookId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property("message").eql("Book not found");
        done();
      });
  });

  it("It should not get a particular book with non-numeric id", (done) => {
    const bookId = "aaa";
    chai
      .request(app)
      .get(`/api/books/${bookId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property("message").eql("Not a valid id");
        done();
      });
  });

  it("It should update a book", (done) => {
    const bookId = 1;
    const updatedBook = {
      id: bookId,
      title: "Updated Awesome book",
      price: "$10.99",
      description: "We have updated the price",
    };
    chai
      .request(app)
      .patch(`/api/books/${bookId}`)
      .set("Accept", "application/json")
      .send(updatedBook)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.book.id).equal(updatedBook.id);
        expect(res.body.book.title).equal(updatedBook.title);
        expect(res.body.book.price).equal(updatedBook.price);
        expect(res.body.book.description).equal(updatedBook.description);
        done();
      });
  });

  it("It should not update a book with invalid id", (done) => {
    const bookId = 9999;
    const updatedBook = {
      id: bookId,
      title: "Updated Awesome book again",
      price: "$11.99",
      description: "We have updated the price",
    };
    chai
      .request(app)
      .patch(`/api/books/${bookId}`)
      .set("Accept", "application/json")
      .send(updatedBook)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property("message").eql("Book not found");
        done();
      });
  });

  it("It should not update a book with non-numeric id value", (done) => {
    const bookId = "ggg";
    chai
      .request(app)
      .patch(`/api/books/${bookId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property("message").eql("Not a valid id");
        done();
      });
  });

  it("It should delete a book", (done) => {
    const bookId = 1;
    chai
      .request(app)
      .delete(`/api/books/${bookId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.should.have.property("message").eql("Deleted successfully!!!");
        done();
      });
  });

  it("It should not delete a book with invalid id", (done) => {
    const bookId = 777;
    chai
      .request(app)
      .delete(`/api/books/${bookId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property("message").eql(`Book not found`);
        done();
      });
  });

  it("It should not delete a book with non-numeric id", (done) => {
    const bookId = "bbb";
    chai
      .request(app)
      .delete(`/api/books/${bookId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property("message").eql("Not a valid id");
        done();
      });
  });
});
