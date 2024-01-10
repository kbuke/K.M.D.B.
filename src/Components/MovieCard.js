import { Link } from "react-router-dom";
import Favourites from "./Favourites";
import DeleteButton from "./DeleteButton";
import "./MovieCard.css"

function MovieCard({movie, movieInfo, setMovieInfo}){
    return(
        <article className="movieCard">
            <h2 className="filmTitle">{movie.Title}</h2>
            <img className="moviePoster" src={movie.Poster} alt="movie posters"/>
            <br/>

            <div className="faveStar">
                <Favourites 
                    movie={movie}
                    movieInfo={movieInfo}
                    setMovieInfo={setMovieInfo}
                />
            </div>
            <br/>

            <div className="rmButton">
                <DeleteButton 
                    movie={movie}
                    movieInfo={movieInfo}
                    setMovieInfo={setMovieInfo}
                />
            </div>
            <br/>
            
            <div >
                <Link 
                    to={`/movie/${movie.id}`}
                    className="learnMore"
                >
                    {movie.Title} Profile
                </Link>
            </div>
        </article>
    )
}
export default MovieCard