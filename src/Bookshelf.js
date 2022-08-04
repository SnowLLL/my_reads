import Book from "./Book";

const Bookshelf = ({bookshelfTitle, booksPerShelf}) =>{
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksPerShelf.map(book=>(<Book key={book.id} book={book}/>))}
          </ol>
        </div>
      </div>
    );
}

export default Bookshelf;