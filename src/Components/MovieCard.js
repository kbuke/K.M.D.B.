// import { NavLink } from "react-router-dom";
// import DeleteButton from "./DeleteButton";
import { NavLink } from "react-router-dom";
import Favourites from "./Favourites";
import DeleteButton from "./DeleteButton";

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
            
            <div className="learnMore" >
                <NavLink 
                    to={`/movie/${movie.id}`}
                >
                    {movie.Title} Profile
                </NavLink>
            </div>
        </article>
    )
}
export default MovieCard