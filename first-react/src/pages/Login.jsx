import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const [ form, setForm] = useState({
        email: "",
        password:"",
    })

    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setForm((_form) => {
            return {
                ..._form, 
                [name]: value
            }
        })  
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        const result = {
            token: "5495fdsfs3244",
            user: {
                id:1,
                name: "giovanni",
                email: "pippo@gmail.com",
            }
        }

        dispatch(login(result));
        navigate("/");
      }

    return (
    <>
        <h1>Login</h1>
        <div>
            <form onSubmit={handleSubmit} >
                <input type="email" name="email" value={form.email} onInput={ handleInput }/>
                <input type="password" name="password" value={form.password} onInput={ handleInput }/>
                <button type="submit"> Invia! </button>
            </form>
        </div>
    </>
    )
}

export default Login;