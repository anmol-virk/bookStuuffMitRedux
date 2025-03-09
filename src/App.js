import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookForm from "./features/BookForm";
import BookView from "./features/BookView";

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/books/add" element={<BookForm />} />
      <Route path="/books/:id" element={<BookForm />} />
      <Route path="/books" element={<BookView />} />
      <Route path="/" element={<BookView />} />
      </Routes>
    </Router>
  );
}
