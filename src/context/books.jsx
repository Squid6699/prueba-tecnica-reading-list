import { createContext, useState } from "react"
import Book from "../moks/books.json"

export const BooksContext = createContext();

export function BooksProvider({children}){
    const [books, setBooks] = useState(Book.library);

    return(
        <BooksContext.Provider value={{
            books,
            setBooks
        }}>{children}</BooksContext.Provider>

    )

}