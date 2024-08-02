import { useFilters } from "../hooks/useFilters";

function Filters(){

    const {filters, setFilters} = useFilters();

    return(
        <>
            <select name="filters" id="filters" value={filters.genero} onChange={(e) => setFilters({genero: e.target.value})}>
                <option value="all">Todas</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
                <option value="Zombies">Zombies</option>
                <option value="Terror">Terror</option>
            </select>
        </>
    );
}

export default Filters;