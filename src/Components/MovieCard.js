import { Link } from "react-router-dom";
import Favourites from "./Favourites";
import DeleteButton from "./DeleteButton";
import "./MovieCard.css"

function MovieCard({movie, handleFave, onDelete}){
    return(
        <article className="movieCard">
            <h2 className="filmTitle">{movie.Title}</h2>
            <img className="moviePoster" src={movie.Poster}/>
            <br/>

            <div className="faveStar">
                <Favourites 
                    movie={movie}
                    newFave={handleFave}
                />
            </div>
            <br/>

            <div className="rmButton">
                <DeleteButton 
                    movie={movie}
                    onDelete={onDelete}
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