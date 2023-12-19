// import { Outlet, useOutletContext } from "react-router-dom"
import FilterSection from "../Components/FilterSection"
import MovieCard from "../Components/MovieCard"
// import { useState } from "react"

import { useOutletContext } from "react-router-dom"

function Home(){
    const appData = useOutletContext()

    //Deconstruct object appData
        //Get film data
        const movieInfo = appData.movieInfo
        
        //Get favourite system
        const handleFave = appData.handleFave

        //Get delete system
        const handleDelete = appData.handleDelete

        //Handle filter system
            //Search Bar Filter
            const handleSearch = appData.handleSearch
            const searchBox = appData.searchBox

            //Year Filter
            const handleYear = appData.handleYear

            const filteredMovies = movieInfo.filter(movie => {
                const movieTitle = movie.Title.toLowerCase()
                if(movieTitle.includes(searchBox.toLowerCase())) return movieTitle
            })

    const movieDetails = (
        <div className="wrapper">
            {filteredMovies.map(movie => (
                <MovieCard 
                    key={movie.id} 
                    movie={movie} 
                    handleFave={handleFave}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    )

    return(
        <main>
            <FilterSection 
                handleSearch={handleSearch}
                searchBox={searchBox}
                handleYear={handleYear}
            />
            {movieDetails}
        </main>
    )
}
export default Home

// function Home(){
//     const appData = useOutletContext()

//     const movieInfo = appData.movieInfo

//     const searchBox = appData.searchBox
//     const handleSearch = appData.handleSearch /*search function*/

//     const filteredMovies = movieInfo.filter(movie => {
//         const movieTitle = movie.Title.toLowerCase()
//         if(movieTitle.includes(searchBox.toLowerCase())) return movieTitle
//     })

//     const genre = appData.genre
//     const handleGenre = appData.handleGenre

//     const genreFilter = filteredMovies.filter(movie => {
//         const movieGenre = movie.Genre
//         const filterGenres = movieGenre.filter(genres => {
//             if(genres === genre) return genre
//         })
//         if(genre === "Select Genre") {
//             return true
//         } else if (genre === filterGenres[0]){
//             return filterGenres[0]
//         } else {
//             return null
//         }
//     })

//     const[faveButton, setFaveButton] = useState(false)

//     const faveButtonFilter = () => {
//         setFaveButton(!faveButton)
//     }

//     const faveFilter = genreFilter.filter(movie => {
//         const movieFave = movie.Fave
//         if(movieFave === true) return movieFave
//     })

//     const handleYear = appData.handleYear

//     const handleDelete = appData.handleDelete

//     const handleNewMovie = appData.handleNewMovie

//     const handleFave = appData.handleFave

//     const movieDetails = (
//         <div className="wrapper">
//             {faveButton? faveFilter.map(movie => (
//                 <MovieCard key={movie.id} movie={movie} onDelete={handleDelete} movieInfo={movieInfo} handleFave={handleFave} /> 
//             )) : genreFilter.map(movie => (
//                 <MovieCard key={movie.id} movie={movie} onDelete={handleDelete} movieInfo={movieInfo} handleFave={handleFave} />
//             ))}
//         </div>
//     )

//     return(
//         <main>
//             <FilterSection searchBox={searchBox} handleSearch={handleSearch} handleGenre={handleGenre} handleYear={handleYear} movieInfo={movieInfo} faveButtonFilter={faveButtonFilter}/>
//             <Outlet context={
//                 {
//                     movieInfo: movieInfo,
//                     handleNewMovie: handleNewMovie
//                 }
//             }/>
//             {movieDetails}
//         </main>
//     )
// }
// export default Home