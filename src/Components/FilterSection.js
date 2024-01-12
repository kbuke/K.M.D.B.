
import "./FilterSection.css"

function FilterSection(
    {
        searchBox, 
        handleSearch,
        handleYear,
        year,
        handleGenre,
        eachGenre,
        faveButtonFilter,
        faveButton
    }
){
    return(
        <div className="filterMenu">
            <h3>Filter Films</h3>
            <input
                type="text"
                value={searchBox}
                onChange={handleSearch}
                placeholder="Search for Films"
                className="filmSearch"
            />

            <button
                onClick={handleYear}
                className="filterYear"
            >
                {/* Filter By Year */}
                {year? "Oldest -> Newest" : "Newest -> Oldest"}
            </button>
        

            <select 
                onChange={handleGenre}
                className="filterGenre"
            >
                <option>Select Genre</option>
                {[...new Set(eachGenre.flat())].map(genre => ( 
                    <option key={genre}>{genre}</option>
                ))}
            </select>
            

            <button 
                onClick={faveButtonFilter}
                className="filterFave"
            >
                {faveButton? "Show All Films" : "Show Favourite Films"}
            </button>

        </div>
    )
}
export default FilterSection