import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    
    const handleLogout = () =>{
        dispatch(logout());
        navigate("/login");
    }    
    return (
    <>
        <h1>Home</h1>
        <div>
            <p>Token: {auth.token ? auth.token : "No User!"}</p>
        </div>
        {
            auth.token ? (
                <div>
                    <button onClick={ handleLogout }>
                        Log Out!
                    </button>
                </div>
                
            ) : 
            (
                <div>
                    No User!
                </div>
            
            )
        }

    </>
    )
}

export default Home;