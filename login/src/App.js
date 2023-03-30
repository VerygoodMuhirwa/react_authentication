import './App.css';
import React,{useState} from 'react';
import Signup from './signup';
import Login from './loginPage';


function App() {
  const [isLoginForm, setIsLoginForm]= useState(true);

const switchModes= ()=>{
setIsLoginForm(!isLoginForm)
}

  return (
    <div className="App">
      {isLoginForm? <Login /> :<Signup/>}
<button onClick={switchModes}> {isLoginForm? "Don't have an account? Sign up here": "Login"}</button>
    </div>
  );
}

export default App;
