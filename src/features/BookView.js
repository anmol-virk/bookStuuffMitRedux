import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./booksSlice";
import BookList from "./BookList";

const BookView = () => {
  const dispatch = useDispatch();

  const { books, status, error } = useSelector((state) => state.books);
  console.log(books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      <h1>Books List</h1>
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <BookList books={books} />
    </div>
  );
};
export default BookView;
