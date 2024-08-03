import { useListaLectura } from "../hooks/useListaLectura";
import { useBooks } from "../hooks/useBooks";
import { useFilters } from "../hooks/useFilters";

function Books(){
    const {addListaLectura} = useListaLectura();
    const {removeBook} = useBooks();
    const {booksFiltrados} = useFilters();

    const handleAddListaLectura = (book) => {
        addListaLectura(book);
        removeBook(book)
    }

    return(
        <main>
            {
                booksFiltrados.length > 0 ?
                <ul className="books-grid">
                    {booksFiltrados.map((item, index) => (
                        <li key={index} className="book-item" onClick={() => handleAddListaLectura(item.book)} >
                            <h4> {item.title} </h4>
                            <img className="book-cover" src={item.book.cover} alt={item.book.title}/>
                        </li>
                    ))}
                </ul>  
                :
                <h1>SIN LIBROS DISPONIBLES</h1>
            }
        </main>
    );
}

export default Books;