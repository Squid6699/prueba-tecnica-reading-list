import { useState } from "react";
import "./App.css"
import Books from "./mooks/books.json"


function App(){
    const [books, setBooks] = useState(Books.library);
    const [listaLectura, setListaLectura] = useState([]);

    const handleClickBook = (book) => {
        setListaLectura(prevState => [...prevState, book]);
        setBooks(prevState => prevState.filter(item => item !== book));
    }

    const handleClickListaLectura = (book) => {
        setBooks(prevState => [...prevState, book]);
        setListaLectura(prevState => prevState.filter(item => item !== book));
    };
    
    return(
        <>
            <header>
                <h2>{books.length} LIBROS DISPONIBLES</h2>
                {listaLectura.length > 0 && <h3>{listaLectura.length} EN LA LISTA DE LECTURA</h3>}
            </header>

            <main>
                {
                    books.length > 0 ?
                    <ul className="books-grid">
                        {books.map((item, index) => (
                            <li key={index} className="book-item" onClick={() => handleClickBook(item)}>
                                <h4> {item.title} </h4>
                                <img className="book-cover" src={item.book.cover} alt={item.book.title}/>
                            </li>
                        ))}
                    </ul>  
                    :
                    <h1>SIN LIBROS DISPONIBLES</h1>
                }
            </main>

            <section className="listaLectura">
                <h1>LISTA DE LECTURA</h1>
                    {
                        listaLectura.length > 0 ? 
                        <ul className="listaLectura-grid">
                            {listaLectura.map((item, index) => (
                                <li key={index} className="listaLectura-item" onClick={() => handleClickListaLectura(item)}>
                                    <h4>{item.book.title}</h4>
                                    <img className="listaLectura-cover" src={item.book.cover} alt={item.book.title}/>
                                </li>
                            ))}
                        </ul>
                        :
                        <strong>LISTA DE LECTURA VACIA</strong>
                    }
            </section>
        </>  
    );
}

export default App;