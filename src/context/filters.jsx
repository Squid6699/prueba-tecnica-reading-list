import { createContext, useState } from "react";

//1. Crear el contexto
export const FiltersContext = createContext();

//2. Crear el Provider para proveer el contexto
export function FiltersProvider({children}){

    const [filters, setFilters] = useState({
        genero: "all"
    });

    const filtradosBooks = (books) => {
        return books.filter(books => {
            return(
                filters.genero === books.book.genre || filters.genero === "all"
            )
        }) 
    }
    
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters,
            filtradosBooks
        }}>{children}
        </FiltersContext.Provider>
    )
}

