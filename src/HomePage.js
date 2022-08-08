import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Bookshelf from './Bookshelf';
import * as booksAPI from './BooksAPI'

const HomePage = () =>{
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);
    const [read, setRead] = useState([]);
    const [allBooks, setAllbooks] = useState([]);

    useEffect(()=>{
        let unmounted = false;
        if(!unmounted){
            const getAllBooks = async () =>{
                const res = await booksAPI.getAll();
                setCurrentlyReading(res.filter((r)=>r.shelf === "currentlyReading"));
                setWantToRead(res.filter((r)=>r.shelf === "wantToRead"));
                setRead(res.filter((r)=>r.shelf === "read"));
                setAllbooks([...currentlyReading, ...wantToRead, ...read]);
            }
            getAllBooks();
        }

        return ()=>{
            unmounted = true;
        };
    },[currentlyReading,wantToRead,read])

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf bookshelfTitle= "Currently Reading" booksPerShelf={currentlyReading}/>
            <Bookshelf bookshelfTitle= "Want to Read" booksPerShelf={wantToRead}/>
            <Bookshelf bookshelfTitle= "Read" booksPerShelf={read}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" state={{allBooks: allBooks}}>Add a book</Link>
        </div>
      </div>
    );
}

export default HomePage;