import App from "./App";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import MovieProfile from "./Pages/MovieProfile";
import Login from "./Pages/Login";
import AddNewFilm from "./Pages/AddNewFilm";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "/addnewfilm",
                        element: <AddNewFilm />
                    }
                ]
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/movie/:id",
                element: <MovieProfile />
            }
        ]
    }
]

export default routes