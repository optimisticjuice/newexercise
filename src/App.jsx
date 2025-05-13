import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home.jsx";
import LoginForm from "./login/LoginForm.jsx";


function App() {
  /**
   * When using react-router-dom, it is best to reserve the App function for the Routes only.
   * This is because the App function is the main entry point of your application and we don't want to clutter it with other components.
   * Instead, we can create a separate component for the routes and use it in the App function.
   * This will make the code more organized and easier to read.
   * If you add the LoginForm as you did before, it becomes tricky to render it in the App function.
   */
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </>
  )
}

export default App
