import { useLocation } from "react-router-dom"

function Home() {

    const location = useLocation();
    const { formData } = location.state;

    return (
        <>
            <h1>Your username is {formData.userName}</h1>
            <h1>Your email is {formData.email}</h1>
            <h1>Your password is {formData.password}</h1>
        </>
    )
};

export default Home;