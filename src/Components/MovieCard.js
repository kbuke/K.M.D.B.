// import { NavLink } from "react-router-dom";
// import DeleteButton from "./DeleteButton";
import { NavLink } from "react-router-dom";
import Favourites from "./Favourites";
import DeleteButton from "./DeleteButton";

function MovieCard({movie, handleFave, onDelete}){
    return(
        <article className="movieCard">
            <h2>{movie.Title}</h2>
            <img className="moviePoster" src={movie.Poster}/>
            <br/>
            <Favourites 
                movie={movie}
                newFave={handleFave}
            />
            <br/>
            <DeleteButton 
                movie={movie}
                onDelete={onDelete}
            />
            <br/>
            <NavLink 
                className="learnMore" 
                to={`/movie/${movie.id}`}
            >
                {movie.Title} Profile
            </NavLink>
        </article>
    )
}
export default MovieCard

// function MovieCard({movie, onDelete, newFave, handleFave}){

//     return(
//             <article className="movieCard">
//                 <h2>{movie.Title}</h2>
//                 <img className="moviePoster" src={movie.Poster}/>
//                 <br/>
//                 <Favourites movie={movie} newFave={handleFave}/>
//                 <br />
//                 <DeleteButton movie={movie} onDelete={onDelete}/>
//                 <br/>
//                 <NavLink to={`/movie/${movie.id}`} className="learnMore">Movie Info</NavLink>
//             </article>
//     )
// }
// export default MovieCard