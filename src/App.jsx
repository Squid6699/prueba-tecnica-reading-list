import "./App.css"
import Book from "./moks/books.json"
import Header from "./components/Header";
import Books from "./components/Books";
import ListaLectura from "./components/ListaLectura";
import { useFilters } from "./hooks/useFilters";


function App(){
    // const [listaLectura, setListaLectura] = useState([]);
    
    const {filtradosBooks} = useFilters();
    const booksFiltrados = filtradosBooks(Book.library);
    
    return(
        <>
            <Header booksFiltrados = {booksFiltrados}/>

            <Books booksFiltrados = {booksFiltrados}/>

            <ListaLectura/>
        </>  
    );
}

export default App;