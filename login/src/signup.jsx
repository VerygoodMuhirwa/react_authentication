import React,{useState} from "react";

function Signup(){
    
    const [email, setEmail ]= useState("")
    const  [password, setPassword] = useState("")
const [username, setUsername] = useState("")
    //handle submit
    const handleSubmit= (e)=>{
e.preventDefault()
    }

    const changeUsername= (e)=>{
        setUsername(e.target.value)
    }

    //handle setting Email
    const settingEmail = (e)=>{
        setEmail(e.target.value)
    }

    
    //handle setting password
    const settingPassword = (e)=>{
     setPassword(e.target.value)
       }
    return (
    
        <form action="" onSubmit={handleSubmit} className="form">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={changeUsername} value={username} />
            <label htmlFor="email">Email</label>

            <input value={email} onChange={settingEmail} type="email" placeholder="Enter your Email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={settingPassword} type="password" name="password"  placeholder="Enter the password"/>
            <input type="submit" />
        </form>

    )

}

export default Signup