import './App.css';
import {Form} from "./components/Form";
import {ListBox} from "./components/ListBox";
import {useEffect, useState} from "react";
import {UpdateForm} from "./components/UpdateForm";

function App() {
  const [books, setBooks] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const [editId, setEditId] = useState("");
  const [editBook, setEditBook] = useState("");
  const [editAuthor, setEditAuthor] = useState("");

  useEffect(() => {
      if(localStorage.getItem("books")) {
          setBooks(JSON.parse(localStorage.getItem("books")));
      } else {
          setBooks([]);
      }
  }, []);

    const handleDelete = (bookid) => {
        let newBooks = books.filter(book => {
            return book.id !== bookid;
        });
        setBooks(newBooks);

        localStorage.setItem("books", JSON.stringify(newBooks));
    }

    const handleEdit = (bookid) => {
        setShowUpdate(true);

        const book = books.filter(b => {
            return b.id === bookid;
        });

        console.log(book);

        setEditId(book[0].id);
        setEditBook(book[0].book);
        setEditAuthor(book[0].author);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let book = e.target[0].value;
        let author = e.target[1].value;

        setBooks([...books, {id: books.length + 1,book: book, author: author}]);

        e.target[0].value = "";
        e.target[1].value = "";

        // console.log([...books, {id: books.length + 1,book: book, author: author}]);
        localStorage.setItem("books", JSON.stringify([...books, {id: books.length + 1,book: book, author: author}]));
    }

    const bookUpdate = e => {
        e.preventDefault();

        let arr = [];
        books.filter(b => {
            if(editId == b.id) {
                let updatedBook = {id: b.id, book: e.target[0].value, author: e.target[1].value};
                arr.push(updatedBook);
            } else {
                arr.push(b);
            }
        });

        // console.log(arr);
        setBooks(arr);
        localStorage.removeItem("books");
        localStorage.setItem("books", JSON.stringify(arr));

        setShowUpdate(false);
    }

    const clearAll = () => {
        setBooks([]);
        localStorage.removeItem("books");
    }

  return (
    <div className="App">
      <h1 className="app-title">React CRUD-APP</h1>
        <div className="container">
            <div className="form-container">
                {showUpdate ? <UpdateForm bookUpdate={bookUpdate} editBook={editBook} editAuthor={editAuthor} /> : <Form handleSubmit={handleSubmit} />}
            </div>
            <div>
                <ListBox books={books} handleDelete={handleDelete} handleEdit={handleEdit} clearAll={clearAll} />
            </div>
        </div>
    </div>
  );
}

export default App;
