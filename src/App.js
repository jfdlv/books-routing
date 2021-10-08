import './App.css';
import {useEffect, useState } from 'react';
import Books from './components/books/Books';
import Profile from './components/profile/Profile';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  console.log("rerendered");
  const [books, setBooks] = useState([]);
  const [route,setRoute] = useState("");

  useEffect(()=>{
      var routes = {
        '':          '',                   
        '#/books':  "books_view",        
        '#/profile':    "profile_view"
      };
      
      function router(){
        console.log(window.location.hash);
    
        // get requested page
        var link = window.location.hash;
    
        // get path (route) for page
        var route = routes[link];

        setRoute(route);
    };
    router()
    window.addEventListener('hashchange',router);    
  },[])

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#/home">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#/profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/books">Books</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        {route === "books_view" && <Books books={books} setBooks={setBooks}/>}
        {route === "profile_view" && <Profile books={books} setBooks={setBooks}/>}
      </div>
    </div>
  );
}

export default App;
