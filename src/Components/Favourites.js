// import { useState } from "react"
import { FaStar } from "react-icons/fa"

function Favourites({movie, movieInfo, setMovieInfo}){
    //Add a film to your favourites when click star (and remove)

    const newFave = (faveMovie) => {
        const faveList = movieInfo.map(movie => {
          if(movie.id === faveMovie.id) return faveMovie
          else return movie
        })
        setMovieInfo(faveList)
    }


    const handleFave = () => {
        fetch(`http://localhost:4000/movies/${movie.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(
                {
                    Fave: !movie.Fave
                }
            )
        })
        .then(r => r.json())
        .then(updatedFilm => newFave(updatedFilm))
    }

    return(
        <FaStar 
            color={movie.Fave? "#ffc107" : "#e4e5e9"}
            onClick={handleFave}
        />
    )
}
export default Favourites