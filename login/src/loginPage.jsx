import React, { useState } from "react";
import axios from "axios";
function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    //handle submit



    //handle setting Email
    const settingEmail = (e) => {
        return setEmail(e.target.value)
    }


    const changeUsername = (e) => {
        setUsername(e.target.value)
    }
    //handle setting password
    const settingPassword = (e) => {
        setPassword(e.target.value)
    }

    //the data to submit to the backend

    const handleSubmit = (e) => {
        const formData = {
            username: username,
            email: email,
            password: password
        }
        e.preventDefault()
        //making the request
        const data = JSON.stringify(formData);
        const options = {
            headers: { "Content-Type": "application/json" }
        }
        axios.post("http://localhost:3400/login", data, options);
    }

    return (

        <form action="" onSubmit={handleSubmit} className="form">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={changeUsername} value={username} />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={settingEmail} type="email" placeholder="Enter your Email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={settingPassword} type="password" name="password" placeholder="Enter the password" />
            <input type="submit" onClick={handleSubmit} value="Login" />
        </form>

    )

}

export default Login