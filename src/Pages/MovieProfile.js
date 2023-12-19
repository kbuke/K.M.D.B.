// import { Link, useOutletContext, useParams } from "react-router-dom"
// import Popup from "reactjs-popup"

function MovieProfile(){

}
export default MovieProfile

// function MovieProfile(){
//     const appData = useOutletContext()

//     const movieInfo = appData.movieInfo

//     const params = useParams()

//     const specificMovie = movieInfo.find(movie => movie.id === parseInt(params.id))

//     if(!specificMovie){
//         return <h1>Loading...</h1>
//     }

//     return(
//         <aside className="movieInfo">
//             <img src={specificMovie.Poster} />
//             <div className="profileInfo">
//                 <h3>{specificMovie.Title}</h3>
//                 <h4>{specificMovie.Plot}</h4>
//                 <p>Release Year: {specificMovie.Year}</p>
//                 <p>Length of Film: {specificMovie.Runtime}</p>
//                 <p>Director: {specificMovie.Director}</p>
//                 <p>Actors: {specificMovie.Actors}</p>
//                 {specificMovie.Genre.map(filmGenres => (
//                     <span key={filmGenres.id}>
//                         <li>{filmGenres}</li>
//                     </span>
//                 ))}  
//                 <br />
//                 <Link to="/" className="homeButton">Return to Home Page</Link>
//             </div>
//         </aside>
//     )
// }

// export default  MovieProfile