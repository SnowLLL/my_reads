import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import * as booksAPI from './BooksAPI';
import Book from './Book';

const SearchPage = () =>{
    const location = useLocation();
    const {allBooks} = location.state;

    const [searchString, setSearchString] = useState("");
    const [filterBooks, setFilterBooks] = useState([]);

    const handleSearchInputChange = (event) =>{
        event.preventDefault();
        setSearchString(event.target.value);
    }
    
    const getBooksWithShelfForFilteredBooks = (filterBooks)=>{
        if(filterBooks.length > 0){
            const filterBookIDs = filterBooks.map((filterBook)=> filterBook.id);
            const booksWithShelf = allBooks.filter(book => filterBookIDs.includes(book.id));
            const booksWithShelfIDs = booksWithShelf.map(book => book.id);
            const updateBooksWithShelf = filterBooks.filter(filterbook => !booksWithShelfIDs.includes(filterbook.id))
                                                .map(book => ({
                                                    ...book,
                                                    shelf: "none"
                                                }));
            return setFilterBooks([...booksWithShelf, ...updateBooksWithShelf]);
        }
    }

    useEffect(() => {
        if(searchString.length > 0){
            const filterSearch = async () =>{
                const res = await booksAPI.search(searchString, 20);
                getBooksWithShelfForFilteredBooks(res);
            }
            filterSearch();
        }

        return () =>  {
            setFilterBooks([]);
        };
    }, [searchString])

    return(
        <div className="search-books">
            <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
                <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={searchString}
                onChange = {handleSearchInputChange}
                />
            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
                {filterBooks.map(book=>(<Book key={book.id} book={book} />))}
            </ol>
            </div>
        </div>
    )
}

export default SearchPage;