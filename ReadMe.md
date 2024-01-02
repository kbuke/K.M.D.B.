# K.M.D.B. Single Page Application (S.P.A.)

## About the K.M.D.B. S.P.A.
This web application showcases a list of movies the user can add, delete, favourite as well as many other interactions.
All Films are shown as individual cards, and each has its own profile.
Information regarding each film has been attained through the public API:
https://www.omdbapi.com/
The application is interactive with features such as removing/adding films, filtering the list of films based on genres, title, favourites, and viewing each films profile with additional facts about the film.

## Intsalation
We need to install react-router-dom by typing in Ubuntu
```javascript
install react-router-dom@6
```

To make requests to the server please run:
```javascript
json-server --watch db.json --port 4000 && npm start
```


## Usage
This app uses one fetch request, which is done to attain the films information. It is used inside a side-effect, (which runs asynchronously), and uses an empty dependancy array so that it only runs the first time the App component renders 
```javascript
//Inside the app component so that I can make variable movieInfo hold all films' information
const [movieInfo, setMovieInfo] = useState([])

useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(r => r.json())
    .then(data => setMovieInfo(data))
    .catch(error => console.error(error))
  }, [])
```
I pass down this information to children components of app (with the routing logic shown in routes.js) using the Outlet component (which I retreive from react-router-dom)
```javascript
//Passing down necessary info to children components
<Outlet context={
    {
        setMovieInfo,
        movieInfo: movieInfo,

        logIn: logIn,
    }
}/>
```
In the Home component we retreive this information passed down from App, as well as set states for our filtering options, and card interactivity elements. 
We use the filter method to sort through all these films that meet certain requirements, and pass them into the <FilterSection> component
```javascript
<FilterSection 
    handleSearch={handleSearch}
    searchBox={searchBox}
    handleYear={handleYear}
    year={year}
    handleGenre = {handleGenre}
    eachGenre = {eachGenre}
    faveButtonFilter = {faveButtonFilter}
    faveButton = {faveButton}
/>
```
We then add event listeners to each section and use these functions to acheive the results needed in the <FilterSection> component

We also use the <MovieCard> component to design our movie cards, with the information passed down from <Home> component
```javascript
<div className="wrapper">
    {faveButton? 
        faveFilter.map(movie => (
            <MovieCard key={movie.id} movie={movie} onDelete={handleDelete} movieInfo={movieInfo} handleFave={handleFave} /> 
        )) 
        : 
        genreFilter.map(movie => (
            <MovieCard key={movie.id} movie={movie} onDelete={handleDelete} movieInfo={movieInfo} handleFave={handleFave} />
        ))}
</div>
```
Our MovieCard component renders things like the films title, poster, and the delete and favourite buttons (the last two through other components), as well as links to each films profile, which is rendered in <MovieProfile>
```javascript
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
```

The user can also add new films to the list, along with information that is relevant to the film, through the <AddNewFilm> component.
By using a POST request, a controlled form, and having the user change state of all necessary information the DOM renders the new film without needing to reload the page
```javascript
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
```

The NavBar is called in the App component so that it does not have to be called in each successive component.

And through using a side-effect, the user is automatically navigated to the login page awaiting them to login
```javascript
const[isLoggedIn, setIsLoggedIn] = useState(false)

const logIn = () => {
    setIsLoggedIn(!isLoggedIn)
}

useEffect(() => {
    if(isLoggedIn) navigate("/")
    else if(!isLoggedIn) navigate("/login")
}, [isLoggedIn])
```

## Future Ideas
I would like to expand on the movie profiles for each film, showing the awards each film won, pictures of actors and director(s) invlolved
I would also like to try and make the code cleaner in my Home component

## Contribution
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


Please make sure to update tests as appropriate.