// import { NavLink } from "react-router-dom";
// import DeleteButton from "./DeleteButton";
// import Favourites from "./Favourites";

function MovieCard({movie}){
    return(
        <article className="movieCard">
            <h2>{movie.Title}</h2>
            <img className="moviePoster" src={movie.Poster}/>
            <br/>
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