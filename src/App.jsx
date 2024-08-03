import "./App.css"
import Header from "./components/Header";
import Books from "./components/Books";
import ListaLectura from "./components/ListaLectura";
import { useFilters } from "./hooks/useFilters";
import { useBooks } from "./hooks/useBooks";
import { ListaLecturaProvider } from "./context/listaLectura";

function App(){    
    const {filtradosBooks} = useFilters();
    const {books} = useBooks();
    const booksFiltrados = filtradosBooks(books);
    
    return(
        <>
            <ListaLecturaProvider>
                <Header booksFiltrados = {booksFiltrados}/>
                <Books booksFiltrados = {booksFiltrados}/>
                <ListaLectura/>
            </ListaLecturaProvider>
        </>  
    );
}

export default App;