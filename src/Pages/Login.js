// import { useState } from "react";
// import { useOutletContext } from "react-router-dom";

function Login(){

}
export default Login

// function Login(){

//   const appData = useOutletContext()
//   //Deconstruct Object
//   const logIn = appData.logIn /*logIn function*/

//   const[formData, setFormData] = useState({
//     username : "",
//     password: ""
//   })

//   const handleChange = (e) => {
//     e.preventDefault()
//     setFormData({
//       ...formData,
//       [e.target.name] : e.target.value
//     })
//   }

//   const handleLogin = (e) => {
//     e.preventDefault()
//     logIn()
//   }

//   return(
//     <main>
//       <form onSubmit={handleLogin}>
//         <div className="logInDetails">
//           <input type="text" name="username" value={formData.username} placeholder="Enter Username" onChange={handleChange}/>
//           <input type="password" name="password" value={formData.password} placeholder="Enter Password" onChange={handleChange}/>
//           <br/>
//           <button type="submit">Log In</button>
//         </div>
//       </form>
//     </main>
//   )
// }
//   export default Login;