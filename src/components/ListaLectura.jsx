function ListaLectura(){
    return(
        <section className="listaLectura">
            <h1>LISTA DE LECTURA</h1>
            {/* {
                listaLectura.length > 0 ? 
                <ul className="listaLectura-grid">
                    {listaLectura.map((item, index) => (
                        <li key={index} className="listaLectura-item">
                            <h4>{item.book.title}</h4>
                            <img className="listaLectura-cover" src={item.book.cover} alt={item.book.title}/>
                        </li>
                    ))}
                </ul>
                :
                <strong>LISTA DE LECTURA VACIA</strong>
            } */}
        </section>
    );
}

export default ListaLectura;