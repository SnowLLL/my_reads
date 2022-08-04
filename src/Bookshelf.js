import Book from "./Book";

const Bookshelf = ({bookshelfTitle}) =>{
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* Should be books.map() */}
            <li>
              <Book />
            </li>
            <li>
              <Book />
            </li>
          </ol>
        </div>
      </div>
    );
}

export default Bookshelf;