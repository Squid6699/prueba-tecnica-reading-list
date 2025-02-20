import { createContext, useState } from "react"
import Book from "../moks/books.json"

export const BooksContext = createContext();

export function BooksProvider({children}){
    const [books, setBooks] = useState(JSON.parse(localStorage.getItem("books")) || Book.library);
    localStorage.setItem("books", JSON.stringify(books));

    const removeBook = (book) => {
        const filtrado = books.filter((item) => item.book !== book);
        setBooks(filtrado);
    }

    return(
        <BooksContext.Provider value={{
            books,
            setBooks,
            removeBook,
        }}>{children}</BooksContext.Provider>

    )

}