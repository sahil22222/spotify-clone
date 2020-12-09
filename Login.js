import React from 'react';
import './Login.css';
import { loginUrl } from "./spotify"
function Login() {
    return (
    <div className="login">
       
        <img src="https://www.basspromotions.com/wp-content/uploads/2019/05/Spotify_Logo_RGB_White.png"
         alt ="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      <h1>"Welcome To Sahil Vyas's Music App"</h1>
    </div>
    )
}

export default Login;