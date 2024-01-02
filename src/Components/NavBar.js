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
                   <em>Home</em>
                </NavLink>

                <NavLink
                    to="/addnewfilm"
                    className="nav-link"
                >
                    <em>Add New Film</em>
                </NavLink>

                <NavLink
                    to="/login"
                    className="nav-link"
                >
                    <em>
                        {isLoggedIn? "Logout" : "Login"}
                    </em>
                </NavLink>
            </nav>
        </div>
    )
}
export default NavBar