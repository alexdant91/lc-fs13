import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"

export const App = () => {
return (
  <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </nav>
    <Routes>
      <Route path='/' element={ <Home />} /> 
      <Route path='/login' element={ <Login />} /> 
    </Routes>

  </>
)
}