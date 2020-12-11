import React, {useState, useContext} from 'react'
import img from '../images/reception.png'
import axios from 'axios';
// import fb from '../images/fb.png'
// import google from '../images/google.png'
import {Link, useHistory} from 'react-router-dom'
import {LoginContext} from '../contexts/LoginContext'

function Login() {
    
    const {setLogged, username, setUsername} = useContext(LoginContext)
    const [password, setPassword] = useState("")

    let history = useHistory()

    function ChangeStateUsername (event) {
        
        // Extract text in input field and set username
        setUsername(event.target.value)
    }

    function ChangeStatePassword (event) {

        // Extract text in input field and set password
        setPassword(event.target.value)
    }

    function login () {
        if (username === "" || password === "") {

            alert("Both fields must be filled!")

        } else {
            axios.post("/api/user/new", {username, password})
            .then(response=> {
               
            })
        }
    }

    function FormValidation (event) {

        // Check if both fields are filled
        if (username === "" || password === "") {

            alert("Both fields must be filled!")

        } else {

            // Check if username is equal to password
            if (username === password) {
                event.preventDefault()
                setLogged(true) 
                history.push("/")
            } else {
                alert("Username or password incorrect!")
            }
        }
    }

    return (
        <div className="container border center">
            <div className="row">
                <div className="col-md-6 .d-flex">
                    <img className='log' src={img} alt="login"/>  
                </div>
                <div className="col-md-6 center">
                    <h2>Log in</h2>
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" onChange={ChangeStateUsername} value={username} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" onChange={ChangeStatePassword} value={password} className="form-control" required/>
                        </div>
                        <button onClick={FormValidation} type="submit" className="btn btn-light" >Log in</button>
                    </form><br/>
                    {/* <p>Or sign in via...</p>
                <p>
                   <a href="https://www.facebook.com/login"><img className="icon" src={fb} alt="Facebook"/></a>
                   <a href="https://accounts.google.com/login"><img className="icon" src={google} alt="Google"/></a>
                </p> */}
                    <p>New here? <Link to='/signup'>Create an account</Link>.</p>
                </div>
            </div>
        </div>
    )
}

export default Login
