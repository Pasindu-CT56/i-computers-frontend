import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import api from "../lib/api";
import { useGoogleLogin } from "@react-oauth/google";
import UserContext from "../context/userContext";



export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userData = useContext(UserContext);

    const googleLogin = useGoogleLogin({
        onSuccess:(response) => {
            console.log(response);
            console.log(response.access_token);

            api.post("/users/google", {
                accessToken: response.access_token
            }).then((res) => {
                console.log(res)
                toast.success("Login successful");
                localStorage.setItem("token", res.data.token);

                userData.setUser(res.data.user);
        
                if(res.data.isAdmin) {
                    navigate("/admin");
                }else{
                    navigate("/");
                }

            }
        ).catch(
            (err) => {
                console.log(err);
                toast.error("Google login failed");
            }
        )
        },
        onError: (error) => {
            console.log(error);
            toast.error("Google login failed");
        }
    });
    const navigate = useNavigate();

    function handleLogin() {

        /*axios.post("http://localhost:3000/users/login",
            {
                email: email,
                password: password
            }
        )*/

        
        api.post("/users/login",
            {
                email: email,
                password: password
            }
        ).then((res) => {

            toast.success("Login successful");
            console.log(res.data.token);
            console.log(res.data.isAdmin);

            //browser store

            localStorage.setItem("token", res.data.token);

            userData.setUser(res.data.user);

            if(res.data.isAdmin) {
                navigate("/admin" , { replace: true });
            }else{
                navigate("/");

            }

        }).catch((err) => {
            console.log(err);
            toast.error("Login failed");
        })


    }

    return (
        <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center flex justify-center items-center">
            <div className="w-[450px] h-[580px] backdrop-blur-md shadow-2xl rounded-lg p-6 flex flex-col items-center">
                <img src="/logo-white.png" className="w-[150px] h-[70px] object-cover bg-accent/40 rounded-lg "/>
                <h1 className="text-3xl font-bold text-secondary mt-5">Login</h1>
                
                <label className="text-secondary text-lg mt-5 w-full font-semibold">Email</label>
                <input
                onChange={
                    (e) => {
                        setEmail(e.target.value);
                    }
                }
                type="email" className="w-full h-12 rounded-lg bg-secondary/20 border-2 border-accent focus:border-accent outline-none px-3 mt-2 text-secondary" placeholder="user@gmail.com"/>

                <label className="text-secondary text-lg mt-5 w-full font-semibold">Password</label>
                <input
                onChange={
                    (e) => {
                        setPassword(e.target.value);
                    }
                }
                type="password" className="w-full h-12 rounded-lg bg-secondary/20 border-2 border-accent focus:border-accent outline-none px-3 mt-2 text-secondary" placeholder="••••••••"/>
                <p className="w-full  text-right">Forget Password? reset <Link to="/reset-password" className="text-accent font-bold ">here</Link></p>

                <button onClick={handleLogin} className="w-full h-12 bg-accent text-white rounded-lg mt-5 font-bold">Login</button>
                <p className="w-full  text-right">Do not have an account? register <Link to="/register" className="text-accent font-bold ">here</Link></p>
                <button  className="w-full h-12 bg-secondary/20 text-secondary rounded-lg mt-5 font-bold flex items-center justify-center gap-2 hover:bg-secondary hover:text-white tracking-normal"
                onClick={googleLogin}>
                    <FcGoogle />Login with Google</button>





            </div>
        </div>
    )
}