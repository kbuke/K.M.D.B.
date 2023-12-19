// import { useState } from "react"
// import { FaStar } from "react-icons/fa"

function Favourites(){

}
export default Favourites


// function Favourites({movie, newFave}){

//     const handleFave = () => {
//         fetch(`http://localhost:4000/movies/${movie.id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify({
//                 Fave: !movie.Fave
//             })
//         })
//         .then(r => r.json())
//         .then(updatedFilm => newFave(updatedFilm))
//     }

//     return(
//         <FaStar 
//             color={movie.Fave? "#ffc107" : "#e4e5e9"}
//             onClick={handleFave}
//         />
//     )
// }
// export default Favourites
