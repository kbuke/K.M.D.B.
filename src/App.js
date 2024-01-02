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
  console.log(movieInfo)

  //handle login
  const[isLoggedIn, setIsLoggedIn] = useState(false)

  const logIn = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  useEffect(() => {
    if(isLoggedIn) navigate("/")
    else if(!isLoggedIn) navigate("/login")
  }, [isLoggedIn])

  return(
    <article className="App">
      <header>
        <img className='appHeader' src='https://fontmeme.com/permalink/231231/b7c56f05192b56d3e59fb59419777620.png'/>
        <p className='intro'>Welcome to K.M.D.B., the new go-to film website. Here you can see facts about your favourite movies such as the directors, and actors. You can also create a favourite list by adding a star to each film.</p>
      </header>

      <>
        <NavBar isLoggedIn={isLoggedIn}/>
        <Outlet context={
          {
            setMovieInfo,
            movieInfo: movieInfo,

            logIn: logIn,
          }
        }/>
      </>
    </article>
  )
}

export default App