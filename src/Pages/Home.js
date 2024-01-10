
import { useState } from "react"
import FilterSection from "../Components/FilterSection"
import MovieCard from "../Components/MovieCard"
import { Outlet, useOutletContext } from "react-router-dom"

function Home(){
    const appData = useOutletContext()

    const setMovieInfo = appData.setMovieInfo

    const movieInfo = appData.movieInfo

    //Get handle add movies system
    const handleNewMovie = (newMovie) => {
        setMovieInfo([...movieInfo, newMovie])
    }

    //Handle filter system
    //Year Filter
    const [year, setYear] = useState(true)

    const handleYear = () => {
        setYear(!year)
          
        const oldToNew = [...movieInfo].sort((a,b) => a.Year - b.Year)
        const newToOld = [...movieInfo].sort((a,b) => b.Year - a.Year)
          
        year? setMovieInfo(oldToNew) : setMovieInfo(newToOld)
    }

    //Search Bar Filter
    const[searchBox, setSearchBox] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchBox(e.target.value)
    }
        
    const filteredMovies = movieInfo.filter(movie => {
        const movieTitle = movie.Title.toLowerCase()
        if(movieTitle.includes(searchBox.toLowerCase())) return movieTitle
    })

    //Genre Filter
    const [genre, setGenre] = useState("Select Genre")

    const handleGenre = (e) => {
        e.preventDefault()
        return setGenre(e.target.value)
    }

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
                    <MovieCard key={movie.id} movie={movie} movieInfo={movieInfo} setMovieInfo={setMovieInfo} /> 
                )) 
                : 
                genreFilter.map(movie => (
                    <MovieCard key={movie.id} movie={movie} movieInfo={movieInfo} setMovieInfo={setMovieInfo} />
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
            <div className="titleContainer">
                <h2 className="filmTitle">
                    {faveButton? "Favourite Films" : "All Films"}
                </h2>
            </div>
            {movieDetails}
        </main>
    )
}
export default Home