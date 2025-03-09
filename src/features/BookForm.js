import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookAsync, updateBookAsync } from "./booksSlice";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const BookForm = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const location = useLocation()
  const navigate = useNavigate()
  const { status, error, books } = useSelector((state) => state.books);
  
  //console.log(state)
  //console.log(status)

  const existingBook = location.state?.books || books.find(book => book._id === id)

  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    genre: "",
  });

  useEffect(() => {
    if(existingBook){
      setFormData({
        bookName: existingBook.bookName || "",
        author: existingBook.author || "",
        genre: existingBook.genre || ""
      })
    }
  }, [existingBook])

  const handleChange = (e) => {
    //console.log(e)
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(existingBook){
      dispatch(updateBookAsync({id: existingBook._id, ...formData}))
    }
    else{
      dispatch(addBookAsync(formData));      
    }
    navigate("/books")
  };

  return (
    <div>
      {status === "loading" ? "Loading" : null }
      {error && <p>{error}</p>}
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bookName"
          value={formData.bookName}
          onChange={handleChange}
          placeholder="Bookname"
        />
        <br />
        <br />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <br />
        <br />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="Genre"
        />
        <br />
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default BookForm;
