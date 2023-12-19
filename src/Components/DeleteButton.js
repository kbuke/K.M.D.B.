function DeleteButton({movie, onDelete}){

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