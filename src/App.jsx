import { useContext, useState } from "react"
import { ContextValues } from "./values/Spread"
import { Routes, Route, useNavigate, Router, Link } from "react-router-dom";
import {Login} from "./login/Login.jsx";

function LoginForm(){
  const startedValues = useContext(ContextValues);
  const {username, email, password} = startedValues;
  const [nameStart, setNameStart] = useState(username);
  const [emailChange, setEmailChange] = useState(email);
  const [passwordChange, setPasswordChange] = useState(password);
  const navigate = useNavigate();

  const usernameChange = (e) =>{
    setNameStart(e.target.value);
     }

  const emailValues = (e) => {
    setEmailChange(e.target.value);
  }

  const passwordValues = (e) => {
    setPasswordChange(e.target.value);
    }

    const LoginButtonClick = () => {
      navigate("/login",{state: nameStart, emailChange, passwordChange});
    }

  
   
  return(
    <>
    <form>
      <label htmlFor="email1">Email</label>
     <input type="text" value={emailChange} onChange={emailValues} />
     <label>UserName</label> 
     <input type="text" value={nameStart} onChange={usernameChange} /> 
     <label>Password</label>
     <input type="password" value={passwordChange} onChange={passwordValues} /> 
     <button onClick={LoginButtonClick}>Login</button>
    </form>
   <h3>
    {emailChange}
    </h3>
   <h3>
    {nameStart}
    </h3>
   <h3>
    {passwordChange}
    </h3>
    </>
  )
}

function App() {
  <Router>
    <Link to="login">Login</Link>
    <Link to="/">Home</Link>
  </Router>
   
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<LoginForm />} />
    </Routes>
    </>
  )
}

export default App
