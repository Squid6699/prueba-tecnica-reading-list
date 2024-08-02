const { createContext, useState } = require("react");

export const ListaLecturaContext = createContext();

export function ListaLecturaProvider({children}){
    const [listaLectura, setListaLectura] = useState([]);

    const addListaLectura = (book) => {
        setListaLectura(prevState => [...prevState,{
            book: book
        }])
    }

    const removeListaLectura = (book) => {
        const filtrados = (prevState => prevState.filter((item) => item.book !== book));
        setListaLectura(filtrados);
    }

    return(
        <ListaLecturaContext.Provider value={{
            listaLectura,
            setListaLectura,
            addListaLectura,
            removeListaLectura
        }}>{children}</ListaLecturaContext.Provider>
    )

}