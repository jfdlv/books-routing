import {useState, useEffect} from 'react';
import Book from "./book/Book";
import Remove from "lodash/remove";

export default function Books({setBooks,books}) {
  const [data, setData] = useState(null);        
  const [loaded, setLoaded] = useState(false);

  const deleteBook = element => {
    let newBooks = [...books];
    Remove(newBooks,element);
    setBooks(newBooks);
  }

  const saveBook = element => {
    let newBooks = [...books];
    newBooks.push(element);
    setBooks(newBooks);
  }
  useEffect(() => {
      async function getData() {
          const response = await fetch('./books.json');
          const json     = await response.json();
          setData(json);
          setLoaded(true);
      }
      getData();
  },[])

    return <>
        <div className="container">
            <h1>Available Books</h1>   
              {loaded && data.books.map((book,i) => 
              <div style={{marginTop: "10px"}} key={i}>
              <Book data={book} books={books} profileView={false} saveBook={()=> saveBook(book)}  deleteBook={()=> deleteBook(book)} />
              </div>  
              )}
        </div>        
    </>;   
}
