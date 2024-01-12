import "./Login.css"
import { useState } from "react"
import { useOutletContext } from "react-router-dom"

function Login(){
    //retreive appData
    const appData = useOutletContext()
        //deconstruct appData obj
        const logIn = appData.logIn

    //Set state for username and password
    const[formData, setFormData] = useState(
        {
            username: "",
            password: ""
        }
    )

    const handleChange = (e) => {
        e.preventDefault()
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleLogin = (e) => {
        e.preventDefault()
        logIn()
    }

    return(
        <main>
            <form onSubmit={handleLogin} id="loginPage">
                <div className="logInDetails">
                    <input 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        placeholder="Enter Username" 
                        onChange={handleChange}
                        className="userName"
                    />
                    <br/>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        placeholder="Enter Password" 
                        onChange={handleChange}
                        className="passWord"
                    />
                    <br/>
                    <button type="submit">Log In</button>
                </div>
            </form>
        </main>
    )
}
export default Login