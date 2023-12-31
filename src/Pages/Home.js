// import { Outlet, useOutletContext } from "react-router-dom"
import { useState } from "react"
import FilterSection from "../Components/FilterSection"
import MovieCard from "../Components/MovieCard"
// import { useState } from "react"

import { Outlet, useOutletContext } from "react-router-dom"

function Home(){
    const appData = useOutletContext()

    //Deconstruct object appData
        //Get film data
        const movieInfo = appData.movieInfo
        
        //Get favourite system
        const handleFave = appData.handleFave

        //Get delete system
        const handleDelete = appData.handleDelete

        //Get handle add movies system
        const handleNewMovie = appData.handleNewMovie

        //Handle filter system
            //Search Bar Filter
            const handleSearch = appData.handleSearch
            const searchBox = appData.searchBox

            const filteredMovies = movieInfo.filter(movie => {
                const movieTitle = movie.Title.toLowerCase()
                if(movieTitle.includes(searchBox.toLowerCase())) return movieTitle
            })

            //Year Filter
            const handleYear = appData.handleYear
            const year = appData.year

            //Genre Filter
            const genre = appData.genre
            const handleGenre = appData.handleGenre

            const genreFilter = filteredMovies.filter(movie => {
                const movieGenre = movie.Genre
                const filterGenres = movieGenre.filter(genres => {
                    if(genres === genre) return genre
                })
                if(genre === "Select Genre") {
                    return true
                } else if (genre === filterGenres[0]){
                    return filterGenres[0]
                } else {
                    return null
                }
            })

            const eachGenre = movieInfo.map(movie => {
                const genreArray = movie.Genre
                return genreArray
            })
            

            //Fave Film Filter
            const[faveButton, setFaveButton] = useState(false)

            const faveButtonFilter = () => {
                setFaveButton(!faveButton)
            }

            const faveFilter = genreFilter.filter(movie => {
                const movieFave = movie.Fave
                if(movieFave === true) return movieFave
            })

    const movieDetails = (
        <div className="wrapper">
            {faveButton? 
                faveFilter.map(movie => (
                    <MovieCard key={movie.id} movie={movie} onDelete={handleDelete} movieInfo={movieInfo} handleFave={handleFave} /> 
                )) 
                : 
                genreFilter.map(movie => (
                    <MovieCard key={movie.id} movie={movie} onDelete={handleDelete} movieInfo={movieInfo} handleFave={handleFave} />
                ))}
        </div>
    )

    return(
        <main>
            <FilterSection 
                handleSearch={handleSearch}
                searchBox={searchBox}
                handleYear={handleYear}
                year={year}
                handleGenre = {handleGenre}
                eachGenre = {eachGenre}
                faveButtonFilter = {faveButtonFilter}
                faveButton = {faveButton}
            />
            <Outlet context={
                {
                    handleNewMovie: handleNewMovie
                }
            }
            
            />
            {movieDetails}
        </main>
    )
}
export default Home