import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({isLoggedIn}){

    return(
        <div className="navBarContainer">
            <nav  className="navigationBar">
                <NavLink
                    to="/"
                    className="nav-link"
                >
                    Home
                </NavLink>

                <NavLink
                    to="/addnewfilm"
                    className="nav-link"
                >
                    Add New Film
                </NavLink>

                <NavLink
                    to="/login"
                    className="nav-link"
                >
                    {isLoggedIn? "Logout" : "Login"}
                </NavLink>
            </nav>
        </div>
    )
}
export default NavBar