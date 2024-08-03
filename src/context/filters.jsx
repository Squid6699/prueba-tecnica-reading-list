import { createContext, useEffect, useState } from "react";

//1. Crear el contexto
export const FiltersContext = createContext();

//2. Crear el Provider para proveer el contexto
export function FiltersProvider({children, books}){

    const [filters, setFilters] = useState({
        genero: "all"
    });

    const [booksFiltrados, setBooksFiltrados] = useState([]);


    // OTRA MANERO DE HACERLO
    // const filtradosBooks = (books) => {
    //     return books.filter(books => {
    //         return(
    //             filters.genero === books.book.genre || filters.genero === "all"
    //         )
    //     }) 
    // }
    
    useEffect(() => {
        const librosFiltrados = books.filter(item => {
            return (
                filters.genero === item.book.genre || filters.genero === "all"
            );
        });
        setBooksFiltrados(librosFiltrados);
    }, [filters, books]);
    
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters,
            booksFiltrados,
        }}>{children}
        </FiltersContext.Provider>
    )
}

