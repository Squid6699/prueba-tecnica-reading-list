import "./App.css"
import Book from "./moks/books.json"
import Header from "./components/Header";
import Books from "./components/Books";
import ListaLectura from "./components/ListaLectura";
import { useFilters } from "./hooks/useFilters";
import { ListaLecturaProvider } from "./context/listaLectura";

function App(){    
    const {filtradosBooks} = useFilters();
    const booksFiltrados = filtradosBooks(Book.library);
    
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