import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({isLoggedIn}){

    return(
        <nav>
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
    )
}
export default NavBar

// function NavBar({isLoggedIn, logOut, logIn}){

//   const handleLogin = (e) => {
//     e.preventDefault()
//     logOut()
//   }

//   const handleLogout = (e) => {
//     e.preventDefault()
//     logIn()
//   }

//   return (
//     <nav>
//       <NavLink
//         to="/"
//         className="nav-link"
//       >
//         Home
//       </NavLink>

//       <NavLink
//         to="/addnewfilm"
//         className="nav-link"
//       >
//         Add New Film
//       </NavLink>

//       <NavLink
//         onClick={isLoggedIn? handleLogin : handleLogout}
//         className="nav-link"
//       >
//         {isLoggedIn? "Logout" : "Login"}
//       </NavLink>
//     </nav>
//   )
// }

// export default NavBar;