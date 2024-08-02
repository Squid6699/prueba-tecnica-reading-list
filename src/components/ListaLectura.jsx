import { useId } from "react";
import { useListaLectura } from "../hooks/useListaLectura"
function ListaLectura(){

    const listaLecutraId = useId();
    const {listaLectura, removeListaLectura} = useListaLectura();

    return(
        <>
            
            <label className="listaLectura-btn" htmlFor={listaLecutraId}>CLICK</label>
            <input id={listaLecutraId} type="checkbox" hidden/>
            <aside className="listaLectura">
                <h1>LISTA DE LECTURA</h1>
                {
                    listaLectura.length > 0 ? 
                    <ul className="listaLectura-grid">
                        {listaLectura.map((item, index) => (
                            <li key={index} className="listaLectura-item" onClick={() => removeListaLectura(item.book)}>
                                <h4>{item.book.title}</h4>
                                <img className="listaLectura-cover" src={item.book.cover} alt={item.book.title}/>
                            </li>
                        ))}
                    </ul>
                    :
                    <strong>LISTA DE LECTURA VACIA</strong>
                }
            </aside>
        </>  
    );
}

export default ListaLectura;