import { useListaLectura } from "../hooks/useListaLectura";
import Filters from "./Filters";

function Header({booksFiltrados}){
    const {listaLectura} = useListaLectura();
    return(
        <header>
            <h2>{booksFiltrados.length} LIBROS DISPONIBLES</h2>
            {listaLectura.length > 0 && <h3>{listaLectura.length} EN LA LISTA DE LECTURA</h3>}
            <Filters/>
        </header>
    );
}

export default Header;