import { useState,useEffect } from "react";
import * as booksAPI from './BooksAPI';

const BookShelfChanger = ({book}) =>{
    const [selectShelfValue, setSelectShelfValue] = useState("");
    const [selectShelfClicked, setSelectShelfClicked]=useState(false);

    const handleSelectChange = (event) =>{
        event.preventDefault();
        setSelectShelfValue(event.target.value);
        setSelectShelfClicked (true);
    }

    useEffect(()=>{
        if(selectShelfClicked){
            const updateBookShelf = async () =>{
                await booksAPI.update(book,selectShelfValue);
            }
            updateBookShelf();
            setSelectShelfClicked(false);
        }
        return ()=> setSelectShelfClicked(false);
    },[selectShelfClicked])

    return (
      <div className="book-shelf-changer">
        <select value={selectShelfValue==="" ? book.shelf : selectShelfValue } onChange={handleSelectChange}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
}

export default BookShelfChanger;