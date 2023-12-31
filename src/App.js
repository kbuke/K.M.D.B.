import NavBar from './Components/NavBar';
import { useEffect } from "react"
import { useState } from "react"
import { Outlet, useNavigate } from 'react-router-dom';
import "./App.css"

function App(){
  const navigate = useNavigate()

  const [movieInfo, setMovieInfo] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(r => r.json())
    .then(data => setMovieInfo(data))
    .catch(error => console.error(error))
  }, [])

  //handle login
  const[isLoggedIn, setIsLoggedIn] = useState(false)

  const logIn = () => {
    setIsLoggedIn(true)
  }

  useEffect(() => {
    if(isLoggedIn) navigate("/")
    else if(!isLoggedIn) navigate("/login")
  }, [isLoggedIn])

  //handle favourite system
  const handleFave = (faveMovie) => {
    const faveList = movieInfo.map(movie => {
      if(movie.id === faveMovie.id) return faveMovie
      else return movie
    })
    setMovieInfo(faveList)
  }

  //handle remove film system
  const handleDelete = (rmMovie) => {
    const deletedMovie = movieInfo.filter(movie => movie.id !== rmMovie.id)
    setMovieInfo(deletedMovie)
  }

  //handle search bar filter
  const[searchBox, setSearchBox] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchBox(e.target.value)
  }

  //handle year filter
  const [year, setYear] = useState(true)

  const handleYear = () => {
    setYear(!year)

    const oldToNew = [...movieInfo].sort((a,b) => a.Year - b.Year)
    const newToOld = [...movieInfo].sort((a,b) => b.Year - a.Year)

    year? setMovieInfo(oldToNew) : setMovieInfo(newToOld)
  }

  //handle genre filter
  const [genre, setGenre] = useState("Select Genre")

  const handleGenre = (e) => {
    e.preventDefault()
    setGenre(e.target.value)
  }

  //handle new films
  const handleNewMovie = (newMovie) => {
    setMovieInfo([...movieInfo, newMovie])
  }

  return(
    <article className="App">
      <header>
        {/* <h1 className="appHeader">K.M.D.B.</h1> */}
        <img className='appHeader' src='https://fontmeme.com/permalink/231231/b7c56f05192b56d3e59fb59419777620.png'/>
        <p className='intro'>Welcome to K.M.D.B., the new go-to film website. Here you can see facts about your favourite movies such as the directors, and actors. You can also create a favourite list by adding a star to each film.</p>
      </header>

      <div>
        <NavBar isLoggedIn={isLoggedIn}/>
        <Outlet context={
          {
            isLoggedIn: isLoggedIn,
            logIn: logIn,

            movieInfo: movieInfo,

            handleFave: handleFave,

            handleDelete: handleDelete,

            handleSearch: handleSearch,
            searchBox: searchBox,

            handleYear: handleYear,
            year: year,

            genre: genre,
            handleGenre: handleGenre,

            handleNewMovie: handleNewMovie
          }
        }/>
      </div>
    </article>
  )
}

export default App