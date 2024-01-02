import { useOutletContext } from "react-router-dom"
import { useState } from "react"
import "./AddNewFilm.css"

function AddNewFilm(){
    const appData = useOutletContext()
    const handleNewFilm = appData.handleNewMovie

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [runtime, setRunTime] = useState("")
    const [genre, setGenre] = useState([])
    const [director, setDirector] = useState("")
    const [actors, setActors] = useState("")
    const [plot, setPlot] = useState("")
    const [poster, setPoster] = useState("")
    const [fave, setFave] = useState(true)


    function handleSubmit(e) {
        e.preventDefault();
        const filmData = {
          Title: title,
          Year: year,
          Runtime: runtime,
          Genre: genre,
          Director: director,
          Actors: actors,
          Plot: plot,
          Poster: poster,
          Fave: fave
        };
        fetch("http://localhost:4000/movies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(filmData)
        })
          .then((r) => r.json())
          .then((data) => {handleNewFilm(data);})
          .catch((error) => console.error(error));
      }
      console.log(fave)

    return(
        <form className="newFilm" onSubmit={(e) => handleSubmit(e)}>
            <h2 className="newFilmTitle">Add New Films</h2>
            <div className="newFilmDetails">
                <label className="titleBox">
                    Title:
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                </label>

                <label className="yearBox">
                    Year: 
                    <input type="text" name="year" value={year} onChange={e => setYear(e.target.value)} />
                </label>

                <label className="timeBox">
                    Runtime: 
                    <input type="text" name="runtime" value={runtime} onChange={e => setRunTime(e.target.value)}/>
                </label>

                <label className="genreBox">
                    Genre: 
                    <input type="text" name="genre" value={genre} onChange={e => setGenre(e.target.value.split(",")) === true? true : false}/> 
                </label>

                <label className="directorBox">
                    Director: 
                    <input type="text" name="director" value={director} onChange={e => setDirector(e.target.value)} />
                </label>

                <label className="actorBox">
                    Actors: 
                    <input type="text" name="actors" value={actors} onChange={e => setActors(e.target.value)} />
                </label>

                <label className="plotBox">
                    Plot: 
                    <input type="text" name="plot" value={plot} onChange={e => setPlot(e.target.value)} />
                </label>

                <label className="posterBox">
                    Poster:  <input type="text" name="poster" value={poster} onChange={e => setPoster(e.target.value)}/>
                </label>

                <label>
                    Favourite Film?: 
                    <select className="faveBox" onChange={e => {
                        console.log(e.target.value)
                        setFave(JSON.parse(e.target.value))}}>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                </label>
                <br/>

                <button className="addButton">Add to List</button>
            </div>
        </form>
    )
    
}

export default AddNewFilm