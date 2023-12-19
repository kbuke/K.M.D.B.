function FilterSection({searchBox, handleSearch}){
    return(
        <input
            type="text"
            value={searchBox}
            onChange={handleSearch}
            placeholder="Search for Films"
            className="filmSearch"
        />
    )
}
export default FilterSection


// function FilterSection({searchBox, handleSearch, handleGenre, handleYear, faveButtonFilter}){
//     return(
//         <div className="filterMenu">
//             <input type="text" value={searchBox} onChange={handleSearch} placeholder="Search for Films" className="filmSearch"/>
//             <br/>
//             <select className="genreFilter" onChange={handleGenre}>
//                 <option>Select Genre</option>
//                 <option>Action</option>
//                 <option>Adventure</option>
//                 <option>Animation</option>
//                 <option>Biography</option>
//                 <option>Comedy</option>
//                 <option>Drama</option>
//                 <option>Fantasy</option>
//                 <option>Thriller</option>
//                 <option>War</option>
//                 <option>Western</option>
//         </select>
//         <br/>
//         <button onClick={handleYear} className="filterYear">Filter By Year</button>
//         <br />
//         <button className="faveFilter" onClick={faveButtonFilter}>Show Favourite Films</button>
//     </div>
//     )
// }

// export default FilterSection