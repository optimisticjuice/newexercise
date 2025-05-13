import { useLocation } from "react-router-dom"

export function Login(){

    const location = useLocation();
    const nameStart = location.state || "";
    const emailChange = location.state || "";
    const passwordChange = location.state || "";
    
    return(
        <>
        <h1>Your username is {nameStart} </h1>
        <h1>Your email is {emailChange} </h1>
        <h1>Your password is {passwordChange} </h1>
        </>
    )
}