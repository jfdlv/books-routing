import Book from "../books/book/Book"
import Remove from "lodash/remove";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
export default function Profile({books, setBooks}) {

  const deleteBook = element => {
    let newBooks = [...books];
    Remove(newBooks,element);
    setBooks(newBooks);
  }


  const renderBooks = books => {
    console.log(books)
    return books.map((book,i) => {
      console.log(book)
      return <Book data={book} profileView={true} key={i} books={books} deleteBook={()=> deleteBook(book)}/>
    });
  }

  return  <>
    <div className="row">
      <h3>
        Profile
      </h3>
    </div>
    <div className="row">
      <div className="col">
        <ProfileInfo />
      </div>
      <div className="col">
        <h4>Selected Books</h4>
        {renderBooks(books)}
      </div>
    </div>
  </>
}