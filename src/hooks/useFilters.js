import { useContext } from "react";
import { FiltersContext } from "./../context/filters";

export function useFilters(){
    const {filters, setFilters} = useContext(FiltersContext);
    
    const filtradosBooks = (books) => {
        return books.filter(books => {
            return(
                filters.genero === books.book.genre || filters.genero === "all"
            )
        }) 
    }
    
    return {filters, setFilters, filtradosBooks}
}