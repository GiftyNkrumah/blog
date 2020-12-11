import React, {useState, useContext} from 'react'
import {LoginContext} from '../contexts/LoginContext'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

function Signup() {

    const {setLogged, username, setUsername} = useContext(LoginContext)
    const [pass, setPass] = useState("")
    const [conf, setConf] = useState("")
    const [email, setEmail] = useState("")

    let history = useHistory()

    function ChangeUse (event) {
        setUsername(event.target.value)
    }

    function ChangePass (event) {
        setPass(event.target.value)
    }

    function ChangeConf (event) {
        setConf(event.target.value)
    }

    function ChangeEmail (event) {
        setEmail(event.target.value)
    }

    function Validation (event) {

        // Check if all relevant fields are filled
        if (username === "" || pass === "" || conf === "" || email === "") {
            alert("Please ensure that you've filled all relevant fields!")
        } else {

            // Check if password is equal to confirmation
            if (pass === conf) {
                event.preventDefault()
                setLogged(true)
                history.push("/")
            } else {
                alert("Password should be the same as confirmation")
            }
        }
    }

    return (
        <div className="container border reg">
            <h2>Register</h2>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>First name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Middle name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Last name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Username</label>
                        <input type="text" className="form-control" onChange={ChangeUse} value={username} required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Email</label>
                        <input type="text" className="form-control" onChange={ChangeEmail} value={email} required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={ChangePass} value={pass} required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Confirm password</label>
                        <input type="password" className="form-control" onChange={ChangeConf} value={conf} required/>
                    </div>
                </div>
                <button type="submit" className="btn btn-light" onClick={Validation}>Sign up</button>
            </form>
        </div>
    )
}

export default Signup
