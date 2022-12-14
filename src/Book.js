import BookShelfChanger from "./BookShelfChanger";
import PropTypes from 'prop-types'; 

const Book = ({book}) =>{
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        `url("${ typeof book.imageLinks !== 'undefined' ? book.imageLinks.thumbnail : ''}")`,
                    }}
                    ></div>
                    <BookShelfChanger book={book}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    );
}

Book.propTypes = {
    book: PropTypes.object
};

export default Book;