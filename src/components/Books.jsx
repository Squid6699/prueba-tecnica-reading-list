function Books({booksFiltrados}){
    return(
        <main>
            {
                booksFiltrados.length > 0 ?
                <ul className="books-grid">
                    {booksFiltrados.map((item, index) => (
                        <li key={index} className="book-item" >
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