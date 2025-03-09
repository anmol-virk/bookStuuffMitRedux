import React from "react";
import { useDispatch } from "react-redux";
import { deleteBookAsync, updateBookAsync } from "./booksSlice";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const BookList = ({ books }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBookAsync(id));
  };
  const handleUpdate = (id) => {
    dispatch(updateBookAsync(id))
  }

  return (
    <>
  <Header />
    <ul>
      {books?.map((book) => (
        <li key={book._id}>
         {book.bookName || book.title} - {book.author} - {book.genre || book.language}{" "}
         <Link to={{pathname: `/books/${book._id}`, state: { books }}}><button onClick={() => handleUpdate(book._id)}>Edit</button></Link>
          <button onClick={() => handleDelete(book._id)}>Delete</button>
        </li>
      ))}
    </ul>
    </>
  );
};

export default BookList;
