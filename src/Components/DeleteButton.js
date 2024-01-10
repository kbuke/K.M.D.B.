function DeleteButton({movie, /*onDelete*/ movieInfo, setMovieInfo}){

    const onDelete = (rmMovie) => {
        const deletedMovie = movieInfo.filter(movie => movie.id !== rmMovie.id)
        setMovieInfo(deletedMovie)
    }

    const handleDelete = () => {
        fetch(`http://localhost:4000/movies/${movie.id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => onDelete(movie))
    }
    
    return(
        <button className="deleteButton" onClick={handleDelete}>Delete Movie From List</button>
    )
}
export default DeleteButton