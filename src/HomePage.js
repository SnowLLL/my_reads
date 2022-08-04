import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react';
import Bookshelf from './Bookshelf';
// import * as booksAPI from './BooksAPI'

const HomePage = () =>{
    const bookshelfTitles = ["Currently Reading", "Want to Read", "Read"]
    // const[bookshelves, setBookShelves] = useState([{
    //     bookshelf:"",
    //     title:"",
    //     authors:""
    // }])

    // useEffect(()=>{
    //     let unmounted = false;
    //     if(!unmounted){
    //         const getAllBooks = async () =>{
    //             const res = await booksAPI.getAll();
    //             setBookShelves(res)
    //         }
    //         getAllBooks();
    //         console.log(bookshelves);
    //     }

    //     return ()=>{
    //         unmounted = true;
    //     };
    // },[])

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
                bookshelfTitles.map(bookshelfTitle=>(
                    <Bookshelf key={bookshelfTitle} bookshelfTitle={bookshelfTitle}/>
                ))
            }
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
}

export default HomePage;