import React,{useState} from "react";

function Login(){
    
    const {email, setEmail }= useState("")
    const  {password, setPassword} = useState("")

    //handle submit
    const handleSubmit= (e)=>{
e.preventDefault()
    }


    //handle setting Email
    const settingEmail = (e)=>{
     return   setEmail(e.target.value)
    }

    
    //handle setting password
    const settingPassword = (e)=>{
        return   setPassword(e.target.value)
       }
    return (
    
        <form action="" onSubmit={handleSubmit} className="form">
            <label htmlFor="email">Email</label>
            <input {...email} onChange={settingEmail} type="email" placeholder="Enter your Email" />
            <label htmlFor="password">Password</label>
            <input {...password} onChange={settingPassword} type="password"  placeholder="Enter the password"/>
            <input type="submit" />
        </form>

    )

}

export default Login