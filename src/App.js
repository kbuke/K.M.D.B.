// import './App.css';
import NavBar from './Components/NavBar';
// import { useEffect, useState } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';

import { useEffect } from "react"
import { useState } from "react"
import { Outlet, useNavigate } from 'react-router-dom';

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

  return(
    <article className="App">
      <header>
        <h1 className="appHeader">K.M.D.B.</h1>
        <p>Welcome to K.M.D.B., the new go-to film website.</p>
      </header>

      <body>
        <NavBar isLoggedIn={isLoggedIn}/>
        <Outlet context={
          {
            isLoggedIn: isLoggedIn,
            logIn: logIn,

            movieInfo: movieInfo,

            handleFave: handleFave,

            handleDelete: handleDelete
          }
        }/>
      </body>
    </article>
  )
}

export default App

// function App(){
//   const[movieInfo, setMovieInfo] = useState([])

//   useEffect(() => {
//     fetch("http://localhost:4000/movies")
//     .then(r => r.json())
//     .then(data => setMovieInfo(data))
//     .catch(error => console.error(error))
//   }, [])

//   //Set up log in 
//   const[isLoggedIn, setIsLoggedIn] = useState(false)
//   const navigate = useNavigate()

//   const logIn = () => {
//     setIsLoggedIn(true)
//   }

//   const logOut = () => {
//     setIsLoggedIn(false)
//   }

//   useEffect(() => {
//     if(isLoggedIn){
//       navigate("/")
//     } else {
//       navigate("/login")
//     }
//   }, [isLoggedIn])

//   //Handle Liking System
//   const handleFave = (faveMovie) => {
//     const faveList = movieInfo.map((movie) => {
//       if(movie.id === faveMovie.id){
//         return faveMovie
//       } else {
//         return movie
//       }
//     })
//     setMovieInfo(faveList)
//   }

//   //Set up filters
//   const[searchBox, setSearchBox] = useState("")

//   const handleSearch = (e) => {
//     e.preventDefault()
//     setSearchBox(e.target.value)
//   }

//   //Set up Genre Filter
//   const [genre, setGenre] = useState("Select Genre")

//   const handleGenre = (e) => {
//     e.preventDefault()
//     setGenre(e.target.value)
//   }

//   //Filter by Year
//   const handleYear = () => {
//     const year = [...movieInfo].sort((a, b) => a.Year - b.Year)
//     setMovieInfo(year)
//   }

//   //Set up New Film List
//   const handleNewMovie = (newMovie) => {
//     setMovieInfo([...movieInfo, newMovie])
//   }

//   //Set up Deleted Films
//   const handleDelete = (rmMovie) => {
//     const deletedMovie = movieInfo.filter(movie => movie.id !== rmMovie.id)
//     setMovieInfo(deletedMovie)
//   }


//   return (
//     <div className='App'>
//       <header>
//         <h1 className='appHeader'>K.M.D.B.</h1>
//         <NavBar isLoggedIn={isLoggedIn} logOut={logOut} logIn={logIn}/>
//         <Outlet context={
//           {
//             isLoggedIn: isLoggedIn,
//             logIn: logIn,
//             logOut: logOut,

//             movieInfo: movieInfo,
//             handleSearch: handleSearch,
//             searchBox: searchBox,

//             genre: genre,
//             handleGenre: handleGenre,

//             handleNewMovie: handleNewMovie,

//             handleDelete: handleDelete,

//             handleYear: handleYear,

//             handleFave: handleFave
//           }
//         }/>
//       </header>
//     </div>
//   )
// }
// export default App;
