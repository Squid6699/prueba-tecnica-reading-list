import { useContext } from "react";
import { ListaLecturaContext } from "../context/listaLectura";

export const useListaLectura = () => {
    const context = useContext(ListaLecturaContext);
    
    if (context === undefined){
        throw new Error("useContext debe ser usado en un ListaLecturaContextProvider")
    }

    return context;
    
}
