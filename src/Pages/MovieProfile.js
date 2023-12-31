import { Link, useOutletContext, useParams } from "react-router-dom"
import "./MovieProfile.css"

function MovieProfile(){
    const appData = useOutletContext()

    const movieInfo = appData.movieInfo

    const params = useParams()

    const specificMovie = movieInfo.find(movie => movie.id === parseInt(params.id))

    if(!specificMovie){
        return <h1>Loading...</h1>
    }

    return(
        <aside className="movieInfo">
            <img src={specificMovie.Poster} />
            <div className="profileInfo">
                <h3 className="filmTitle">{specificMovie.Title}</h3>
                <h4 className="filmBio">{specificMovie.Plot}</h4>
                <p className="filmYear">Release Year: {specificMovie.Year}</p>
                <p className="filmLength">Length of Film: {specificMovie.Runtime}</p>
                <p className="filmDirector">Director: {specificMovie.Director}</p>
                <p className="filmActors">Actors: {specificMovie.Actors}</p>
                {specificMovie.Genre.map(filmGenres => (
                    <span key={filmGenres.id} className="filmGenre">
                        <li>{filmGenres}</li>
                    </span>
                ))}  
                <br />
                <Link to="/" className="homeButton">Return to Home Page</Link>
            </div>
        </aside>
    )
}

export default  MovieProfile