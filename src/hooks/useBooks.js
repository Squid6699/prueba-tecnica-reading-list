import { useContext } from "react";
import { BooksContext } from "../context/books";

export function useBooks(){
    const context = useContext(BooksContext);
    
    if (context === undefined){
        throw new Error("useContext debe ser usado en un BooksContextProvider")
    }

    return context;
}