// import { useOutletContext } from "react-router-dom"
// import { useState } from "react"

function AddNewFilm(){

}
export default AddNewFilm
// function AddNewFilm(){
//     const appData = useOutletContext()
//     const handleNewFilm = appData.handleNewMovie

//     const [title, setTitle] = useState("")
//     const [year, setYear] = useState("")
//     const [runtime, setRunTime] = useState("")
//     const [genre, setGenre] = useState([])
//     const [director, setDirector] = useState("")
//     const [actors, setActors] = useState("")
//     const [plot, setPlot] = useState("")
//     const [poster, setPoster] = useState("")


//     function handleSubmit(e) {
//         e.preventDefault();
//         const filmData = {
//           Title: title,
//           Year: year,
//           Runtime: runtime,
//           Genre: genre,
//           Director: director,
//           Actors: actors,
//           Plot: plot,
//           Poster: poster
//         };
//         fetch("http://localhost:4000/movies", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(filmData)
//         })
//           .then((r) => r.json())
//           .then((data) => {handleNewFilm(data);})
//           .catch((error) => console.error(error));
//       }

//     return(
//         <form className="newFilm" onSubmit={(e) => handleSubmit(e)}>
//             <h2 className="newFilmTitle">Add New Films</h2>
//             <div className="newFilmDetails">
//                 <label className="inputBox">
//                     Title:
//                     <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
//                 </label>

//                 <label className="inputBox">
//                     Year: 
//                     <input type="text" name="year" value={year} onChange={e => setYear(e.target.value)} />
//                 </label>

//                 <label className="inputBox">
//                     Runtime: 
//                     <input type="text" name="runtime" value={runtime} onChange={e => setRunTime(e.target.value)}/>
//                 </label>

//                 <label className="inputBox">
//                     Genre: 
//                     <input type="text" name="genre" value={genre} onChange={e => setGenre([e.target.value])}/>
//                 </label>

//                 <label className="inputBox">
//                     Director: 
//                     <input type="text" name="director" value={director} onChange={e => setDirector(e.target.value)} />
//                 </label>

//                 <label className="inputBox">
//                     Actors: 
//                     <input type="text" name="actors" value={actors} onChange={e => setActors(e.target.value)} />
//                 </label>

//                 <label className="inputBox">
//                     Plot: 
//                     <input type="text" name="plot" value={plot} onChange={e => setPlot(e.target.value)} />
//                 </label>

//                 <label className="inputBox">
//                     Poster:  <input type="text" name="poster" value={poster} onChange={e => setPoster(e.target.value)}/>
//                 </label>
//                 <br/>

//                 <button className="addButton">Add to List</button>
//             </div>
//         </form>
//     )
    
// }

// export default AddNewFilm