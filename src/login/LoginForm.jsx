import { useContext, useState } from "react"
import { ContextValues } from "../values/Spread"
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const startedValues = useContext(ContextValues);
    const { username, email, password } = startedValues;

    //You actually did not need the useStates. Also both the useContexxt and useLocation are used to pass
    // data accross components. So you need to pick one to use.
    const [nameStart, setNameStart] = useState(username);
    const [emailChange, setEmailChange] = useState(email);
    const [passwordChange, setPasswordChange] = useState(password);
    const navigate = useNavigate();

    const usernameChange = (e) => {
        setNameStart(e.target.value);
    }

    const emailValues = (e) => {
        setEmailChange(e.target.value);
    }

    const passwordValues = (e) => {
        setPasswordChange(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email: e.target.email.value,
            userName: e.target.userName.value,
            password: e.target.password.value
        };

        // the state must be passed as an object. Notice the added curly braces. That is why when you go
        // to the Home component, you have to destructure the state object to get the values.
        navigate('/home', { state: { formData } });
    };

    /**
     * when using a form, it is best to use the onSubmit event handler to handle the form submission.
     * This is because the onSubmit event handler is triggered when the form is submitted, and in this case you do not
     * even need to track the values of the inputs using useState. Even your submit button can be a regular button
     * because the form will handle the submission for you.
     */

    return (
        <>
            {/**
         * It is very important to have the "name" attributes. Without it, the form will not know what to track
         */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email1">Email</label>
                <input type="text" name="email" value={emailChange} onChange={emailValues} />
                <label>UserName</label>
                <input type="text" name="userName" value={nameStart} onChange={usernameChange} />
                <label>Password</label>
                <input type="password" name="password" value={passwordChange} onChange={passwordValues} />
                <button>Login</button>
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