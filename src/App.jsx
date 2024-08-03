import "./App.css"
import Header from "./components/Header";
import Books from "./components/Books";
import ListaLectura from "./components/ListaLectura";
import { FiltersProvider } from './context/filters';
import { useBooks } from "./hooks/useBooks";
import { ListaLecturaProvider } from "./context/listaLectura";

function App(){    
    const { books } = useBooks();
    console.log("a");
    return(
        <>
            <ListaLecturaProvider>
                <FiltersProvider books={books}>
                    <Header />
                    <Books />
                    <ListaLectura/>
                </FiltersProvider>
            </ListaLecturaProvider>
        </>  
    );
}

export default App;